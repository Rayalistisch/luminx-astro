<template>
  <section
    id="top"
    class="relative min-h-[80vh] sm:h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center sm:bg-fixed"
      :style="{
        backgroundImage:
          'linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0.69) 35%, rgba(0,0,0,1)), url(/dark-background.jpg)',
        transform: 'scale(' + (1 + scrollY * scaleFactor) + ')',
        filter: 'saturate(1.05) contrast(1.05) brightness(0.9)',
      }"
    />

    <!-- moving smoke -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute -left-40 bottom-[-10%] w-[60vw] h-[60vw] rounded-full blur-3xl"
        :style="{
          background:
            'radial-gradient(circle at 30% 40%, rgba(248,250,252,0.55), transparent 60%)',
          animation: 'smokeDriftSlow 48s ease-in-out infinite',
          opacity: heroFogIntensity,
        }"
      />
      <div
        class="absolute -right-40 top-[-10%] w-[55vw] h-[55vw] rounded-full blur-3xl"
        :style="{
          background:
            'radial-gradient(circle at 70% 30%, rgba(249,250,251,0.45), transparent 60%)',
          animation: 'smokeDriftSlowAlt 52s ease-in-out infinite',
          opacity: heroFogIntensity * 0.9,
        }"
      />
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full blur-3xl"
        :style="{
          background:
            'radial-gradient(circle at 50% 40%, rgba(248,250,252,0.35), transparent 70%)',
          animation: 'smokeDriftSlow 60s linear infinite',
          opacity: heroFogIntensity * 0.8,
        }"
      />
    </div>

    <!-- vignette -->
    <div
      class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0,transparent_40%,rgba(0,0,0,0.95)_100%)]"
    />

    <!-- Content -->
    <div class="relative z-10 text-center px-4">
      <div class="mb-6 flex justify-center gap-4 text-amber-300">
        <span class="w-6 h-6 rounded-full border border-amber-300/70 flex items-center justify-center text-[10px]">
          LX
        </span>
        <span class="w-6 h-6 rounded-full border border-amber-300/40" />
        <span class="w-6 h-6 rounded-full border border-amber-300/70 flex items-center justify-center text-[10px]">
          AI
        </span>
      </div>

      <p
        class="text-[10px] md:text-xs tracking-[0.35em] text-amber-200/70 mb-3 uppercase"
      >
        AI Marketing & Business Intelligence
      </p>

      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.35em] mb-6"
        :style="{
          letterSpacing: '0.35em',
          opacity: 1 - scrollY * 0.002,
          transform: 'translateY(' + scrollY * 0.4 + 'px)',
          textShadow:
            '0 0 18px rgba(251,191,36,0.35), 0 0 40px rgba(251,191,36,0.25)',
        }"
      >
        LuminX
      </h1>

      <p
        class="text-sm md:text-base tracking-[0.35em] text-amber-200/90 mb-6 uppercase"
        :style="{
          opacity: 1 - scrollY * 0.002,
          transform: 'translateY(' + scrollY * 0.25 + 'px)',
        }"
      >
        A Story About A Self Taught Marketeer
      </p>

      <p class="text-sm md:text-base text-amber-100/80 max-w-xl mx-auto">
        It starts, as most dangerous stories do, with a rumour in a quiet corridor
        and a book you weren&apos;t supposed to find.
      </p>

      <div class="flex justify-center gap-3 text-amber-200/80 mt-6">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-300/90" />
        <span class="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
        <span class="w-1.5 h-1.5 rounded-full bg-amber-300/90" />
      </div>
    </div>

    <!-- scroll indicator -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2"
      :style="{ opacity: 1 - scrollY * 0.01 }"
    >
      <div
        class="w-6 h-10 border border-amber-200/70 rounded-full flex justify-center items-start"
      >
        <div class="w-[2px] h-3 bg-amber-200 mt-2 animate-bounce" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  scrollY: { type: Number, required: true },
  scaleFactor: { type: Number, required: true },
  heroFogIntensity: { type: Number, required: true },
});
</script>
