<template>
  <div class="bg-black text-amber-50 min-h-screen flex flex-col">
    <MainNavbar :pages="pages" />

    <main class="flex-1 pt-24">
      <section class="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <p class="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 mb-4">
          About
        </p>
        <div class="grid md:grid-cols-[1.3fr,1fr] gap-10 items-start">
          <div>
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase mb-6"
            >
              LuminX is <span class="text-amber-300">ray</span>.
            </h1>
            <p class="text-sm md:text-base text-amber-100/80 mb-4">
              Zelfbenoemde vibecoder, performance marketeer en data-nerd. Met
              één been in campagnes en het andere in code. Geen agency met
              accountmanagers, maar direct schakelen met degene die het werk
              maakt.
            </p>
            <p class="text-sm md:text-base text-amber-100/75 mb-4">
              De rode draad: e-commerce, tooling, dashboards, productconfigurators
              en alles wat daartussen zit. Van klein experiment tot grotere
              platform-ideeën.
            </p>
            <p class="text-sm md:text-base text-amber-100/75">
              LuminX is geen massaproductie-bureau. Liever een paar goede
              samenwerkingen, veel sparren en samen dingen bouwen die je niet
              kant-en-klaar in een template-shop vindt.
            </p>
          </div>

          <!-- Timeline / info -->
          <div
            class="border border-amber-900/60 rounded-2xl bg-gradient-to-b from-black/70 to-black/20 p-6 flex flex-col gap-4"
          >
            <p class="text-[10px] tracking-[0.28em] uppercase text-amber-300/80">
              Highlights
            </p>
            <ul class="space-y-3 text-sm text-amber-100/80">
              <li>
                <span class="text-amber-300/90">E-commerce &amp; fashion</span> —
                jaren ervaring aan merk- en bureauzijde met webshops, feeds en
                campagnes.
              </li>
              <li>
                <span class="text-amber-300/90">Tech &amp; tooling</span> — van
                Google Sheets scripts tot eigen platforms, configurators en
                AI-tools.
              </li>
              <li>
                <span class="text-amber-300/90">Data first</span> — dashboards,
                BigQuery, tracking en een gezonde hekel aan blind sturen.
              </li>
            </ul>

            <div class="mt-4 pt-4 border-t border-amber-900/60 text-[11px]">
              <p class="uppercase tracking-[0.22em] text-amber-300/80 mb-1">
                Praktisch
              </p>
              <p class="text-amber-100/80">
                Op zoek naar iemand die kan meedenken, bouwen én gewoon zelf de
                tooling opent? Dan zitten we waarschijnlijk snel goed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <MainFooter :sections="[]" :scroll-to-section="scrollToTop" />
  </div>
</template>

<script setup>
import MainNavbar from '@/vue/layout/MainNavbar.vue';
import MainFooter from '@/vue/layout/MainFooter.vue';
import { pages } from '@/vue/composables/useScrollStory';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
