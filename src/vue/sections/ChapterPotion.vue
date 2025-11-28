<template>
  <section
    id="potion"
    class="relative min-h-screen flex items-center justify-center px-4 py-24 bg-gradient-to-b from-black via-[#1a1309] to-black"
  >
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0, 0, 0, 1),transparent_60%)]" />

    <div class="relative max-w-4xl text-center z-10">
      <p class="text-[15px] tracking-[0.3em] text-amber-300/80 uppercase mb-4">
        Chapter I
      </p>
      <h2
        class="text-3xl md:text-4xl mb-8 font-light"
        :style="{
          opacity: getOpacity(400, 800),
          transform: 'translateY(' + getTranslateY(400, 800, 60) + 'px)',
          textShadow: '0 0 26px rgba(251,191,36,0.35)',
        }"
      >
        A Complex Potion, That Made Me Curious.
      </h2>
      <p
        class="text-lg md:text-2xl leading-relaxed text-amber-100/90"
        :style="{
          opacity: getOpacity(550, 900),
          transform: 'translateY(' + getTranslateY(550, 900, 40) + 'px)',
        }"
      >
        When the time was there, my couriosity was always way beyond the imaginary.
        Always eager to learn more then wat was on first hand available. Marketing?
        Sure. Coding? Sure a little vibecoding is always welcome.
        That made it to this date that all my experience, handed over mostly by
        self-tought, is way beyond a standard marketeer.
        <br /><br />
        You need a little code to complete your Datalayer? I Got you.
        <br />
        You need a new designed page to accomplish 2025 SEO strategy? Sure.
      </p>
      <p
        class="mt-6 text-sm text-amber-100/75"
        :style="{
          opacity: getOpacity(650, 1000),
          transform: 'translateY(' + getTranslateY(650, 1000, 30) + 'px)',
        }"
      >
        You tell yourself you&apos;re only curious. You keep reading anyway.
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  getOpacity: { type: Function, required: true },
  getTranslateY: { type: Function, required: true },
});
</script>
