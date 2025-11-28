<template>
  <section
    id="brewing"
    class="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden z-10"
  >
    <!-- Background with woods -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-35"
      :style="{
        backgroundImage:
          'linear-gradient(180deg, rgba(0,0,0,0.96), rgba(0,0,0,0.24) 35%, rgba(0,0,0,1)), url(/talking-woods.jpg)',
        transform: 'scale(' + getScale(2000, 2400, 0.98) + ')',
      }"
    />

    <!-- Fog at bottom -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
      :style="{
        opacity: brewFogIntensity,
        background:
          'linear-gradient(to top, rgba(248,250,252,0.45), transparent)',
      }"
    />

    <!-- Rising smoke pillars -->
    <div
      class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="absolute bottom-0 w-10 rounded-full blur-2xl"
        :style="{
          left: 10 + (i - 1) * 18 + '%',
          height: 70 + (i - 1) * 18 + 'px',
          background:
            'linear-gradient(to top, rgba(248,250,252,0), rgba(248,250,252,0.55), rgba(248,250,252,0))',
          opacity: brewFogIntensity * (0.5 + (i - 1) * 0.1),
          animation: 'smokeRiseLoop 11s ease-in-out infinite',
          animationDelay: (i - 1) * 2 + 's',
        }"
      />
    </div>

    <div class="relative z-10 max-w-3xl text-center">
      <p class="text-[10px] tracking-[0.3em] text-amber-300/80 uppercase mb-4">
        Chapter IV
      </p>
      <Zap class="w-10 h-10 text-amber-300 mx-auto mb-4" />
      <h2
        class="text-3xl md:text-5xl mb-8 font-light"
        :style="{ opacity: getOpacity(2000, 2300) }"
      >
        Half a Year Over a Single Flame
      </h2>
      <p
        class="text-lg md:text-2xl text-amber-100/90 mb-4"
        :style="{ opacity: getOpacity(2150, 2450) }"
      >
        For six months, your days shrink to the size of a cauldron. The brew
        should not boil. It should barely move. You change the heat in increments
        so small they feel like superstition rather than science.
      </p>
      <p
        class="text-base text-amber-100/80 italic"
        :style="{ opacity: getOpacity(2250, 2600) }"
      >
        &quot;If you&apos;re lucky, you never discover how badly it can go
        wrong.&quot;
      </p>
    </div>
  </section>
</template>

<script setup>
import { Zap } from 'lucide-vue-next';

const props = defineProps({
  getOpacity: { type: Function, required: true },
  getScale: { type: Function, required: true },
  brewFogIntensity: { type: Number, required: true },
});
</script>
