<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <main class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20 text-gray-500 font-medium">
        Loading article...
      </div>

      <!-- Not Found -->
      <div v-else-if="!post" class="text-center py-20">
        <h1 class="text-2xl font-bold text-gray-800">Post not found</h1>
        <router-link to="/blog" class="mt-4 inline-block text-[#00a86b] font-semibold underline">
          ← Back to Blog
        </router-link>
      </div>

      <!-- Article Content -->
      <article v-else class="max-w-3xl mx-auto">
        <div class="mb-6">
          <router-link to="/blog" class="inline-flex items-center text-xs font-semibold text-[#00a86b] uppercase tracking-wide hover:underline">
            ← Back to Blog
          </router-link>
        </div>

        <header class="mb-8">
          <div class="flex items-center gap-3 text-xs font-medium text-gray-500 mb-4">
            <span class="px-2.5 py-1 bg-gray-100 rounded-full font-semibold text-gray-700">
              {{ post.category || 'General' }}
            </span>
            <span>•</span>
            <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
            <span v-if="post.author">•</span>
            <span v-if="post.author">By {{ post.author }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <p v-if="post.callout" class="mt-6 text-lg text-gray-600 italic border-l-4 border-[#00a86b] pl-4">
            {{ post.callout }}
          </p>
        </header>

        <!-- Main Featured Image -->
        <figure v-if="post.imageUrl" class="mb-10 rounded-2xl overflow-hidden shadow-sm">
          <img :src="post.imageUrl" :alt="post.title" class="w-full h-auto object-cover max-h-[500px]" />
        </figure>

        <!-- Portable Text Rich Body -->
        <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
          <PortableText v-if="post.body" :value="post.body" />
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';
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