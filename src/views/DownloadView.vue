<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 font-sans">
    <!-- Header Navigation -->
    <header class="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-2 cursor-pointer" @click="goHome">
        <span class="text-2xl font-black text-purple-700 tracking-tight">SwychPe</span>
      </div>
      <router-link 
        to="/" 
        class="text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
      >
        ← Back to Home
      </router-link>
    </header>

    <!-- Main Content Hero Section -->
    <main class="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center">
      <!-- Badge -->
      <span class="inline-block bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
        Mobile Banking Made Easy
      </span>

      <!-- Title & Subtitle -->
      <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Get the <span class="text-purple-700">SwychPe</span> App
      </h1>
      <p class="text-lg text-slate-600 max-w-2xl mb-10">
        Bank, pay, save with your Njangi group, and request instant loans right from your phone—anywhere in Cameroon. Choose your platform below to start.
      </p>

      <!-- Store Download Buttons Container -->
      <div class="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center mb-12">
        <!-- Google Play Store Button -->
        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-4 bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-slate-700"
        >
          <svg class="w-8 h-8 fill-current text-green-400" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.42V3.234c0-.54.218-1.033.609-1.420zm11.602 11.602l2.366 2.366-10.98 6.34 8.614-8.706zm.001-2.832L6.597 1.878l10.98 6.34-2.366 2.366zM16.63 12l2.846-1.643c.697-.402.697-1.056 0-1.458L16.63 12z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs uppercase tracking-widest text-slate-400 font-medium">GET IT ON</div>
            <div class="text-lg font-bold leading-none">Google Play</div>
          </div>
        </a>

        <!-- Apple App Store Button -->
        <a 
          href="https://apple.com/app-store" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-4 bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-slate-700"
        >
          <svg class="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-.99 2.97 1.07.08 2.15-.57 2.8-1.37"/>
          </svg>
          <div class="text-left">
            <div class="text-xs uppercase tracking-widest text-slate-400 font-medium">Download on the</div>
            <div class="text-lg font-bold leading-none">App Store</div>
          </div>
        </a>
      </div>

      <!-- Features Brief Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div class="flex flex-col space-y-2">
          <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center font-bold">1</div>
          <h3 class="font-bold text-slate-900">Instant Setup</h3>
          <p class="text-sm text-slate-500">Open a fully verified account in under two minutes using just your phone number.</p>
        </div>

        <div class="flex flex-col space-y-2">
          <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center font-bold">2</div>
          <h3 class="font-bold text-slate-900">All Networks</h3>
          <p class="text-sm text-slate-500">Pay bills, top up airtime, and transfer funds across all major networks seamlessly.</p>
        </div>

        <div class="flex flex-col space-y-2">
          <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center font-bold">3</div>
          <h3 class="font-bold text-slate-900">Njangi & Loans</h3>
          <p class="text-sm text-slate-500">Save together with your community and access pre-approved advances instantly.</p>
        </div>
      </div>
    </main>

    <!-- Simple Footer -->
    <footer class="w-full text-center py-6 text-xs text-slate-400 border-t border-slate-200">
      © {{ new Date().getFullYear() }} SwychPe. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DownloadView',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>