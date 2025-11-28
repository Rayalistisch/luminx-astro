<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div class="relative flex flex-col items-center gap-4">
      <!-- LUMINX logo/woord -->
      <div
        class="text-3xl md:text-5xl tracking-[0.6em] text-amber-300 font-light animate-pulse"
        style="letter-spacing: 0.6em"
      >
        <span
          v-for="(letter, index) in letters"
          :key="index"
          class="inline-block animate-letter"
          :style="{ animationDelay: `${index * 0.10}s` }"
        >
          {{ letter }}
        </span>
      </div>

      <div class="text-[10px] tracking-[0.35em] uppercase text-amber-200/70">
        Brewing Some Marketing Data
      </div>

      <!-- “Loading bar” -->
      <div class="mt-4 h-[1px] w-40 bg-amber-900/60 overflow-hidden rounded-full">
        <div class="h-full w-1/3 bg-amber-300 animate-loader-bar" />
      </div>
    </div>
  </div>
</template>

<script setup>
const letters = 'LUMINX'.split('');
</script>

<style scoped>
@keyframes letterGlow {
  0% {
    opacity: 0.2;
    transform: translateY(0);
    text-shadow: 0 0 0 rgba(251, 191, 36, 0);
  }
  40% {
    opacity: 1;
    transform: translateY(-2px);
    text-shadow: 0 0 18px rgba(251, 191, 36, 0.8);
  }
  100% {
    opacity: 0.6;
    transform: translateY(0);
    text-shadow: 0 0 6px rgba(251, 191, 36, 0.3);
  }
}

@keyframes loaderBar {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}

.animate-letter {
  animation: letterGlow 2.2s ease-in-out infinite alternate;
}

.animate-loader-bar {
  animation: loaderBar 2.8s ease-in-out infinite;
}
</style>
