<template>
  <div
    class="fixed left-1/2 pointer-events-none z-30 hidden lg:flex items-center justify-center"
    :style="{
      top: '50%',
      transform:
        'translate(150%, -50%) rotate(' + (-30 - scrollY * 0.08) + 'deg)',
      transition: 'transform 0.15s ease-out',
    }"
  >
    <div class="relative">
      <img
        src="/wand.png"
        alt="Magic wand"
        class="max-h-[30vh] w-auto drop-shadow-[10px_0_80px_rgba(251,191,36,0.45)]"
        style="filter: saturate(0.25) contrast(2.05);"
      />

      <div
        class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full blur-3xl"
        :style="{
          background: wandGlowBackground,
          opacity: activeSection === 'top' ? 0.6 : 0.9,
          animation: 'spellPulse 1.6s ease-out infinite',
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  activeSection: { type: String, required: true },
  scrollY: { type: Number, required: true },
});

const wandGlowBackground = computed(() => {
  switch (props.activeSection) {
    case 'potion':
      return 'radial-gradient(circle, rgba(251,191,36,0.95), transparent 70%)';
    case 'vial':
      return 'radial-gradient(circle, rgba(96,165,250,0.95), transparent 70%)';
    case 'ingredients':
      return 'radial-gradient(circle, rgba(52,211,153,0.95), transparent 70%)';
    case 'brewing':
      return 'radial-gradient(circle, rgba(248,113,113,0.95), transparent 70%)';
    case 'experience':
      return 'radial-gradient(circle, rgba(244,114,182,0.95), transparent 70%)';
    case 'final':
      return 'radial-gradient(circle, rgba(148,163,184,0.95), transparent 70%)';
    default:
      return 'radial-gradient(circle, rgba(251,191,36,0.5), transparent 70%)';
  }
});
</script>
