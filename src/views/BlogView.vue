<template>
  <div>
    <!-- Site standard hero component -->
    <PageHero
      crumb="Blog"
      eyebrow="Insights & Updates"
      title="SwychPe Blog"
      lead="Stay up to date with the latest financial insights, mobile money trends, and product announcements."
    />

    <!-- Main content section with site standard container -->
    <section class="section">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20 text-gray-500 font-medium">
          Loading articles...
        </div>

        <!-- Empty State -->
        <div v-else-if="!posts.length" class="text-center py-20 text-gray-500">
          No articles published yet. Check back soon!
        </div>

        <!-- Articles Grid -->
        <div v-else class="grid grid-3">
          <article
            v-for="post in posts"
            :key="post._id"
            class="card card-hover flex flex-col justify-between overflow-hidden"
          >
            <div>
              <router-link :to="`/blog/${post.slug}`" class="block aspect-video overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  v-if="post.imageUrl"
                  :src="post.imageUrl"
                  :alt="post.title"
                  class="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </router-link>

              <span class="text-xs font-semibold text-[#00a86b] uppercase tracking-wider">
                {{ post.category || 'General' }}
              </span>
              <h3 class="text-xl font-bold mt-2 mb-2 leading-snug">
                <router-link :to="`/blog/${post.slug}`" class="hover:underline">
                  {{ post.title }}
                </router-link>
              </h3>
              <p v-if="post.excerpt" class="text-sm text-gray-600 line-clamp-3 mb-4">
                {{ post.excerpt }}
              </p>
            </div>

            <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
              <router-link :to="`/blog/${post.slug}`" class="font-semibold text-[#00a86b] hover:underline">
                Read Article →
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageHero from '../components/PageHero.vue';
import { sanityClient } from '../services/sanity';

const posts = ref([]);
const loading = ref(true);

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const fetchPosts = async () => {
  loading.value = true;
  const query = `*[_type == "post" && (site == "swychpe" || site == "all")] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`;
  try {
    posts.value = await sanityClient.fetch(query);
  } catch (err) {
    console.error('Failed to load blog posts:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});
</script>