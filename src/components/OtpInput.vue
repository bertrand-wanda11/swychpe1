<template>
  <div class="otp" :class="{ shake: error }" @paste.prevent="onPaste">
    <input
      v-for="(_, i) in length"
      :key="i"
      :ref="(el) => (boxes[i] = el)"
      :value="digits[i]"
      class="box"
      :class="{ filled: digits[i], invalid: error }"
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      maxlength="1"
      :aria-label="`Digit ${i + 1} of ${length}`"
      :disabled="disabled"
      @input="onInput(i, $event)"
      @keydown="onKey(i, $event)"
      @focus="$event.target.select()"
    />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps({
  length: { type: Number, default: 6 },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
})
const emit = defineEmits(['complete', 'change'])
const model = defineModel({ type: String, default: '' })

const boxes = []
const digits = ref(Array(props.length).fill(''))

const sync = () => {
  model.value = digits.value.join('')
  emit('change', model.value)
  if (digits.value.every(Boolean)) emit('complete', model.value)
}

const focus = (i) => boxes[Math.max(0, Math.min(props.length - 1, i))]?.focus()

const onInput = (i, e) => {
  const v = e.target.value.replace(/\D/g, '')
  if (v.length > 1) return fill(v, i)
  digits.value[i] = v
  e.target.value = v
  if (v) focus(i + 1)
  sync()
}

const onKey = (i, e) => {
  if (e.key === 'Backspace' && !digits.value[i]) {
    e.preventDefault()
    digits.value[i - 1] = ''
    focus(i - 1)
    sync()
  } else if (e.key === 'ArrowLeft') focus(i - 1)
  else if (e.key === 'ArrowRight') focus(i + 1)
}

const fill = (text, start = 0) => {
  const clean = text.replace(/\D/g, '').slice(0, props.length - start)
  clean.split('').forEach((d, k) => (digits.value[start + k] = d))
  focus(start + clean.length)
  sync()
}

const onPaste = (e) => fill(e.clipboardData.getData('text'))

// Parent clears the model (e.g. after a wrong code) → clear the boxes too.
watch(model, (v) => {
  if (!v) {
    digits.value = Array(props.length).fill('')
    nextTick(() => focus(0))
  }
})

onMounted(() => nextTick(() => focus(0)))
defineExpose({ focus: () => focus(0) })
</script>

<style scoped>
.otp {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 10px;
}
.box {
  width: 100%;
  aspect-ratio: 1 / 1.15;
  min-width: 0;
  text-align: center;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ink);
  border: 1.5px solid var(--line-strong);
  border-radius: 12px;
  background: var(--surface);
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
.box:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 4px var(--brand-100);
  transform: translateY(-2px);
}
.box.filled {
  border-color: var(--brand);
  background: var(--brand-50);
  animation: pop 0.18s ease-out;
}
.box.invalid {
  border-color: var(--danger);
  background: var(--danger-soft);
}
.shake {
  animation: shake 0.4s;
}
@keyframes pop {
  50% {
    transform: scale(1.08);
  }
}
@keyframes shake {
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}
@media (max-width: 380px) {
  .otp { gap: 6px; }
  .box { font-size: 1.3rem; }
}
</style>
