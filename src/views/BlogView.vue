<template>
  <div class="page-wrapper flex flex-col justify-between">
    <Navbar />

    <main class="max-w-6xl mx-auto px-6 py-16 flex-1 w-full">
      <header class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs uppercase font-semibold tracking-widest text-[#00a86b]">Insights & Updates</span>
        <h1 class="text-4xl md:text-5xl font-bold mt-3 text-gray-900 tracking-tight">SwychPe Blog</h1>
        <p class="text-gray-600 mt-4 text-base md:text-lg">
          Stay up to date with the latest financial insights, mobile money trends, and product announcements.
        </p>
      </header>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20 text-gray-500 font-medium">
        Loading articles...
      </div>

      <!-- Empty State -->
      <div v-else-if="posts.length === 0" class="text-center py-20 text-gray-500">
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
              loading="lazy"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
              SwychPe
            </div>
          </router-link>

          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-xs font-semibold text-[#00a86b] uppercase mb-2">
                <span>{{ post.category || 'Updates' }}</span>
                <span>•</span>
                <span class="text-gray-400 font-normal">{{ formatDate(post.publishedAt) }}</span>
              </div>
              <h2 class="text-xl font-bold text-gray-900 hover:text-[#00a86b] transition">
                <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
              </h2>
              <p v-if="post.seoDescription" class="text-gray-600 text-sm mt-2 line-clamp-3">
                {{ post.seoDescription }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>By {{ post.author }}</span>
              <router-link :to="`/blog/${post.slug}`" class="font-semibold text-[#00a86b] hover:underline">
                Read Article →
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { sanityClient } from '../services/sanity';

const posts = ref([]);
const loading = ref(true);

const fetchPosts = async () => {
  loading.value = true;
  // Fetch posts filtered for SwychPe or shared posts
  const query = `*[_type == "post" && (site == "swychpe" || site == "all")] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "author": coalesce(author->name, author, "SwychPe Team"),
    publishedAt,
    "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url),
    seoDescription
  }`;

  try {
    posts.value = await sanityClient.fetch(query);
  } catch (err) {
    console.error('Error fetching SwychPe posts:', err);
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

onMounted(() => {
  document.title = 'Blog | SwychPe';
  fetchPosts();
});
</script>

<style scoped>
.page-wrapper {
  font-family: "Bricolage Grotesque", "DM Sans", sans-serif;
  min-height: 100vh;
}
</style>