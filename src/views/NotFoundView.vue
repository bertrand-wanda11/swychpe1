<template>
  <section class="section nf">
    <div class="container">
      <p class="eyebrow">Error 404</p>
      <h1 class="h-display">We can't find that page</h1>
      <p class="lead">The page may have moved. Try one of these instead.</p>
      <div class="btn-row">
        <router-link to="/" class="btn btn-primary">Go to homepage</router-link>
        <router-link to="/help" class="btn btn-outline">Help centre</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nf {
  min-height: 60vh;
  display: flex;
  align-items: center;
}
.nf .lead {
  margin-bottom: 28px;
}
</style>
