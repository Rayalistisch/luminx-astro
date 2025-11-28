<template>
  <section
    id="ingredients"
    class="min-h-screen bg-gradient-to-b from-black via-[#1a1309] to-black py-24 px-4 relative z-10"
  >
    <div class="max-w-5xl mx-auto">
      <p
        class="text-[10px] tracking-[0.3em] text-amber-300/80 uppercase mb-4 text-center"
      >
        Chapter III
      </p>
      <h2
        class="text-3xl md:text-5xl text-center mb-16 font-light"
        :style="{
          opacity: getOpacity(1600, 1900),
          transform: 'translateY(' + getTranslateY(1600, 1900, 60) + 'px)',
        }"
      >
        Rare Components, A Unique Mix of Experience
      </h2>

      <div class="grid md:grid-cols-3 gap-12">
        <div
          v-for="(ingredient, i) in ingredients"
          :key="ingredient.name"
          class="text-center"
          :style="{
            opacity: getOpacity(1750 + i * 150, 2100 + i * 150),
            transform:
              'translateY(' +
              getTranslateY(1750 + i * 150, 2100 + i * 150, 50) +
              'px)',
          }"
        >
          <div
            class="w-24 h-24 mx-auto mb-5 rounded-full border border-amber-300/60 bg-gradient-to-br from-amber-900/40 to-amber-700/20 shadow-[0_0_35px_rgba(251,191,36,0.2)]"
          />
          <h3 class="text-xl text-amber-100 mb-2">{{ ingredient.name }}</h3>
          <p class="text-sm text-amber-100/80">
            {{ ingredient.desc }}
          </p>
        </div>
      </div>

      <p
        class="mt-10 text-sm text-center text-amber-100/75 max-w-3xl mx-auto"
      >
        By the time you have everything you need, you realise the recipe was never
        just about the ingredients. It was measuring how far you&apos;re willing
        to go for one perfect day.
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  getOpacity: { type: Function, required: true },
  getTranslateY: { type: Function, required: true },
});

const ingredients = [
  {
    name: 'Ashwinder Ash',
    desc: 'Taken while the embers are still warm; cooled in starlight.',
  },
  {
    name: 'Crushed Squill Bulb',
    desc: 'Distilled beneath a waning moon to avoid unpredictable surges.',
  },
  {
    name: 'Murtlap Essence',
    desc: 'Filtered through sea-salt glass to keep the future from fracturing.',
  },
];
</script>
