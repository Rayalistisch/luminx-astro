<template>
  <div
    class="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3"
  >
    <button
      v-for="section in sections"
      :key="section.id"
      @click="scrollToSection(section.id)"
      class="group relative flex items-center gap-3 focus:outline-none"
      :aria-label="section.label"
    >
      <!-- label bubble -->
      <span
        class="pointer-events-none -translate-x-1 rounded-full px-3 py-1 text-[10px] tracking-[0.22em] uppercase bg-black/80 border border-amber-900/60 text-amber-100/80 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-200"
      >
        {{ section.label }}
      </span>

      <!-- dot -->
      <span
        class="relative h-2.5 w-2.5 rounded-full border transition-all duration-200"
        :class="[
          activeSection === section.id
            ? 'border-amber-300 bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.9)] scale-110'
            : 'border-amber-700 bg-transparent group-hover:border-amber-300 group-hover:bg-amber-300/60',
        ]"
      >
        <span
          v-if="activeSection === section.id"
          class="absolute inset-[-6px] rounded-full border border-amber-500/40 opacity-70"
        />
      </span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  sections: { type: Array, required: true },
  activeSection: { type: String, required: true },
  scrollToSection: { type: Function, required: true },
});

// sections, activeSection en scrollToSection gebruik je direct in de template
// via `sections`, `activeSection`, `scrollToSection` – dankzij <script setup>
</script>
