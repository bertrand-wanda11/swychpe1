<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="section">
      <div class="container text-center py-20 text-gray-500 font-medium">
        Loading article...
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else-if="!post" class="section">
      <div class="container text-center py-20">
        <h2 class="text-2xl font-bold mb-4">Post not found</h2>
        <router-link to="/blog" class="text-[#00a86b] font-semibold underline">
          ← Back to Blog
        </router-link>
      </div>
    </div>

    <!-- Article Content -->
    <div v-else>
      <PageHero
        crumb="Blog"
        :eyebrow="post.category || 'Article'"
        :title="post.title"
        :lead="post.callout || ''"
      />

      <section class="section">
        <div class="container max-w-3xl mx-auto">
          <div class="mb-6">
            <router-link to="/blog" class="text-xs font-semibold text-[#00a86b] uppercase tracking-wider hover:underline">
              ← Back to Blog
            </router-link>
          </div>

          <div class="flex items-center gap-3 text-xs text-gray-500 mb-8 border-b border-gray-100 pb-4">
            <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
            <span v-if="post.author">•</span>
            <span v-if="post.author">By {{ post.author }}</span>
          </div>

          <figure v-if="post.imageUrl" class="mb-10 rounded-xl overflow-hidden shadow-sm">
            <img :src="post.imageUrl" :alt="post.title" class="w-full h-auto object-cover max-h-[500px]" />
          </figure>

          <div class="prose max-w-none text-gray-800 leading-relaxed text-base md:text-lg">
            <PortableText v-if="post.body" :value="post.body" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';
import PageHero from '../components/PageHero.vue';
import { sanityClient } from '../services/sanity';

const route = useRoute();
const post = ref(null);
const loading = ref(true);

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const fetchPost = async () => {
  loading.value = true;
  const slug = route.params.slug;
  const query = `*[_type == "post" && slug.current == $slug && (site == "swychpe" || site == "all")][0] {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    "author": author->name,
    callout,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    body
  }`;

  try {
    post.value = await sanityClient.fetch(query, { slug });
    if (post.value?.title) {
      document.title = `${post.value.title} | SwychPe Blog`;
    }
  } catch (err) {
    console.error('Failed to load article:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>