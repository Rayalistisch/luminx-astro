<template>
  <section
    id="final"
    class="relative h-[90vh] flex items-center justify-center overflow-hidden z-10"
  >
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="
        background-image:
          linear-gradient(180deg,rgba(0,0,0,0.96),rgba(0,0,0,0.9)),
          url('https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1600');
      "
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_60%,rgba(0,0,0,1)_100%)]"
    />

    <div class="relative z-10 text-center px-4 max-w-2xl mx-auto">
      <p
        class="text-[10px] tracking-[0.3em] text-amber-300/80 uppercase mb-4"
      >
        Chapter VI
      </p>
      <h2
        class="text-3xl md:text-5xl mb-6 font-light tracking-[0.25em] uppercase"
        style="text-shadow: 0 0 30px rgba(251,191,36,0.4);"
      >
        When the Luck Wears Off
      </h2>
      <p class="text-base md:text-lg text-amber-100/90 mb-10">
        The real question was never whether it works. It&apos;s who you become
        once the world stops stepping aside for you – and whether you still move
        as if it might.
      </p>
      <button
        class="px-10 py-3 border border-amber-200/80 text-amber-100 tracking-[0.25em] text-xs uppercase rounded-md hover:bg-amber-200 hover:text-black transition-colors"
        @click="scrollToSection('top')"
      >
        Return To The First Page
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  scrollToSection: { type: Function, required: true },
});
</script>
