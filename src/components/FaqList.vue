<template>
  <div class="faq">
    <details v-for="(f, i) in items" :key="f.q" class="faq-item" :open="i === 0">
      <summary>
        <span>{{ f.q }}</span>
        <AppIcon name="chevron" :size="20" />
      </summary>
      <p>{{ f.a }}</p>
    </details>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

defineProps({ items: { type: Array, required: true } })
</script>

<style scoped>
.faq {
  display: grid;
  gap: 12px;
}
.faq-item {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  transition: border-color 0.2s;
}
.faq-item[open] {
  border-color: var(--brand-200);
}
summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 22px;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}
summary svg {
  flex-shrink: 0;
  color: var(--brand);
  transition: transform 0.2s;
}
.faq-item[open] summary svg {
  transform: rotate(180deg);
}
.faq-item p {
  margin: 0;
  padding: 0 22px 22px;
  color: var(--muted);
}
</style>
