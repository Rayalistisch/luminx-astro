<template>
  <footer class="border-t border-amber-900/40 bg-gradient-to-t from-black via-black/95 to-black/80">
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 flex flex-col gap-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/40 bg-black/60 shadow-[0_0_24px_rgba(251,191,36,0.35)]">
            <Sparkles class="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <p class="text-[11px] tracking-[0.32em] uppercase text-amber-200/80">
              LuminX
            </p>
            <p class="text-xs text-amber-300/70">
              AI × Marketing × Data Experiments
            </p>
          </div>
        </div>

        <div class="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-900/60 bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-amber-200/70">
          <span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          <span>Based in NL</span>
          <span class="opacity-40">•</span>
          <span>Available for selected projects</span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-4 text-[11px] md:text-xs">
        <div class="flex flex-wrap gap-3 md:gap-4 uppercase tracking-[0.22em] text-amber-200/70">
          <button
            v-for="section in sections"
            :key="section.id"
            class="relative pb-1 text-amber-200/70 hover:text-amber-50 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-amber-300 after:transition-all after:duration-200 hover:after:w-full"
            @click="scrollToSection(section.id)"
          >
            {{ section.label }}
          </button>
        </div>

        <div class="flex flex-col items-start md:items-end gap-1 text-amber-300/80">
          <a
            href="mailto:info@luminx.ai"
            class="hover:text-amber-50 transition-colors"
          >
            info@luminx.ai
          </a>
          <p class="text-[10px] text-amber-500/70">
            © {{ new Date().getFullYear() }} LuminX. Some potions are self-taught.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next';

const props = defineProps({
  sections: { type: Array, required: true },
  scrollToSection: { type: Function, required: true },
});
</script>
