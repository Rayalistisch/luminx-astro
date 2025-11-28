<template>
  <section
    id="experience"
    class="min-h-screen bg-gradient-to-b from-black via-[#130f0a] to-black py-24 px-4 relative z-10"
  >
    <div class="max-w-4xl mx-auto">
      <p
        class="text-[10px] tracking-[0.3em] text-amber-300/80 uppercase mb-4 text-center"
      >
        Chapter V
      </p>
      <h2
        class="text-3xl md:text-5xl text-center mb-16 font-light"
        :style="{
          opacity: getOpacity(2500, 2800),
          transform: 'translateY(' + getTranslateY(2500, 2800, 50) + 'px)',
        }"
      >
        What It Feels Like
      </h2>

      <div class="space-y-12">
        <div
          v-for="(text, i) in items"
          :key="i"
          class="flex gap-4 items-start"
          :style="{
            opacity: getOpacity(2650 + i * 200, 2950 + i * 200),
            transform:
              'translateX(' +
              (i % 2 === 0
                ? getTranslateY(2650 + i * 200, 2950 + i * 200, -40)
                : -getTranslateY(2650 + i * 200, 2950 + i * 200, -40)) +
              'px)',
          }"
        >
          <div
            class="mt-1 w-8 h-8 rounded-full border border-amber-300/70 flex items-center justify-center text-xs text-amber-200/90 bg-black/40"
          >
            {{ i + 1 }}
          </div>
          <p class="text-lg text-amber-100/90">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  getOpacity: { type: Function, required: true },
  getTranslateY: { type: Function, required: true },
});

const items = [
  'The world does not explode into fireworks. It tightens – as if everything unnecessary steps politely aside.',
  'You step into conversations at the exact second you are needed, and out of them just before they turn.',
  'Paths you never mapped quietly align, until not taking the risk feels more dangerous than leaping.',
];
</script>
