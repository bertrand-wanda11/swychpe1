<template>
  <span class="badge" :class="status === 'live' ? 'badge-live' : 'badge-soon'">
    {{ status === 'live' ? 'Available now' : 'Coming soon' }}
  </span>
</template>

<script setup>
defineProps({ status: { type: String, default: 'live' } })
</script>
