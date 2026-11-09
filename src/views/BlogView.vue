<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <main class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <span class="text-xs uppercase tracking-widest font-semibold text-[#00a86b]">
          Insights & Updates
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-2">
          SwychPe Blog
        </h1>
        <p class="text-gray-600 mt-4 text-base sm:text-lg">
          Stay up to date with the latest financial insights, mobile money trends, and product announcements.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20 text-gray-500 font-medium">
        Loading articles...
      </div>

      <!-- Empty State -->
      <div v-else-if="!posts.length" class="text-center py-20 text-gray-500">
        No articles published yet. Check back soon!
      </div>

      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in posts"
          :key="post._id"
          class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
        >
          <router-link :to="`/blog/${post.slug}`" class="block aspect-video overflow-hidden bg-gray-100">
            <img
              v-if="post.imageUrl"
              :src="post.imageUrl"
              :alt="post.title"
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </router-link>

          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-xs font-semibold text-[#00a86b] uppercase tracking-wider">
                {{ post.category || 'General' }}
              </span>
              <h2 class="text-xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
                <router-link :to="`/blog/${post.slug}`" class="hover:text-[#00a86b] transition">
                  {{ post.title }}
                </router-link>
              </h2>
              <p v-if="post.excerpt" class="text-gray-600 text-sm line-clamp-3 mb-4">
                {{ post.excerpt }}
              </p>
            </div>
            
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>{{ formatDate(post.publishedAt) }}</span>
              <router-link :to="`/blog/${post.slug}`" class="font-semibold text-[#00a86b] hover:underline">
                Read Article →
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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