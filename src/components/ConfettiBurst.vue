<template>
  <canvas ref="canvas" class="confetti" aria-hidden="true" />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvas = ref(null)
let frame = 0

const COLORS = ['#7b1fa2', '#9c27b0', '#4a148c', '#f6a800', '#ffd166', '#ffffff']

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const c = canvas.value
  const ctx = c.getContext('2d')
  const dpr = window.devicePixelRatio || 1
  const resize = () => {
    c.width = c.offsetWidth * dpr
    c.height = c.offsetHeight * dpr
  }
  resize()
  const W = c.width
  const parts = Array.from({ length: 160 }, () => ({
    x: W / 2 + (Math.random() - 0.5) * W * 0.2,
    y: c.height * 0.35,
    vx: (Math.random() - 0.5) * 16 * dpr,
    vy: (-Math.random() * 14 - 6) * dpr,
    w: (6 + Math.random() * 6) * dpr,
    h: (8 + Math.random() * 10) * dpr,
    r: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: COLORS[(Math.random() * COLORS.length) | 0],
  }))
  const start = performance.now()
  const tick = (now) => {
    ctx.clearRect(0, 0, c.width, c.height)
    const fade = Math.max(0, 1 - (now - start) / 3800)
    for (const p of parts) {
      p.vy += 0.35 * dpr
      p.vx *= 0.99
      p.x += p.vx
      p.y += p.vy
      p.r += p.vr
      ctx.save()
      ctx.globalAlpha = fade
      ctx.translate(p.x, p.y)
      ctx.rotate(p.r)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)))
      ctx.restore()
    }
    if (fade > 0) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
})

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<style scoped>
.confetti {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}
</style>
