<template>
  <div class="page-wrapper flex flex-col justify-between">
    <SiteNavbar />

    <main class="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
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
      <article v-else class="article-content">
        <div class="mb-6">
          <router-link to="/blog" class="text-xs font-semibold text-[#00a86b] uppercase tracking-wide hover:underline">
            ← Back to Blog
          </router-link>
        </div>

        <header class="mb-8">
          <div class="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
            <span class="px-2.5 py-1 bg-gray-100 rounded-full font-semibold text-gray-700">
              {{ post.category || 'General' }}
            </span>
            <span>•</span>
            <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
            <span>•</span>
            <span>By {{ post.author }}</span>
          </div>

          <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <p v-if="post.callout" class="mt-4 text-lg text-gray-600 italic border-l-4 border-[#00a86b] pl-4">
            {{ post.callout }}
          </p>
        </header>

        <!-- Main Featured Image -->
        <figure v-if="post.imageUrl" class="mb-10 rounded-2xl overflow-hidden shadow-sm">
          <img :src="post.imageUrl" :alt="post.title" class="w-full h-auto object-cover max-h-[460px]" />
        </figure>

        <!-- Portable Text Rich Body -->
        <div class="prose max-w-none text-gray-800 leading-relaxed text-base md:text-lg">
          <PortableText v-if="post.body" :value="post.body" />
        </div>
      </article>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';
import SiteNavbar from '../components/SiteNavbar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import { sanityClient } from '../services/sanity';

const route = useRoute();
const post = ref(null);
const loading = ref(true);

const fetchPost = async () => {
  loading.value = true;
  const slug = route.params.slug;

  const query = `*[_type == "post" && slug.current == $slug && (site == "swychpe" || site == "all")][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    "author": coalesce(author->name, author, "SwychPe Team"),
    publishedAt,
    "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url),
    callout,
    body,
    seoTitle,
    seoDescription
  }`;

  try {
    post.value = await sanityClient.fetch(query, { slug });
    if (post.value) {
      applySEOMeta(post.value);
    }
  } catch (err) {
    console.error('Error fetching SwychPe article:', err);
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const applySEOMeta = (article) => {
  // 1. Title
  const pageTitle = article.seoTitle || `${article.title} | SwychPe`;
  document.title = pageTitle;

  // 2. Meta description
  const desc = article.seoDescription || '';
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', desc);

  // 3. Open Graph Tags
  const setOG = (property, content) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content || '');
  };

  setOG('og:title', pageTitle);
  setOG('og:description', desc);
  setOG('og:url', `https://swychpe.com/blog/${article.slug}`);
  if (article.imageUrl) {
    setOG('og:image', article.imageUrl);
  }

  // 4. JSON-LD Structured Data
  let schemaScript = document.getElementById('jsonld-article');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'jsonld-article';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }

  schemaScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": desc,
    "image": article.imageUrl ? [article.imageUrl] : [],
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author || "SwychPe Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SwychPe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://swychpe.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://swychpe.com/blog/${article.slug}`
    }
  });
};

watch(() => route.params.slug, () => {
  fetchPost();
});

onMounted(() => {
  fetchPost();
});
</script>

<style scoped>
.page-wrapper {
  font-family: "Bricolage Grotesque", "DM Sans", sans-serif;
  min-height: 100vh;
}
.article-content :deep(p) {
  margin-bottom: 1.25rem;
}
.article-content :deep(h2) {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.article-content :deep(h3) {
  font-size: 1.35rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
</style>