<template>
  <div class="bg-black text-amber-50 min-h-screen flex flex-col">
    <MainNavbar :pages="pages" />

    <main class="flex-1 pt-24">
      <!-- Hero -->
      <section class="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <p class="text-[14px] tracking-[0.35em] uppercase text-amber-300/80 mb-4">
          Services
        </p>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase mb-6"
        >
          Systems over <span class="text-amber-300">“kampagnes”</span>.
        </h1>
        <p class="text-sm md:text-base text-amber-100/80 max-w-2xl">
          Geen losse trucjes, maar een langetermijn set-up waar AI, data en
          marketing elkaar versterken. Van tracking tot dashboards, van
          SEA-structuren tot productconfigurators.
        </p>
      </section>

      <!-- Service cards -->
      <section class="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- AI Marketing Systems -->
          <article
            class="border border-amber-900/60 bg-gradient-to-b from-black/60 to-black/20 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
            <div class="flex items-center gap-3">
              <div
                class="h-9 w-9 rounded-full border border-amber-500/50 flex items-center justify-center bg-black/60"
              >
                <Cpu class="w-4 h-4 text-amber-300" />
              </div>
              <h2 class="text-sm tracking-[0.28em] uppercase text-amber-200/90">
                AI Marketing Systems
              </h2>
            </div>
            <p class="text-sm text-amber-100/80">
              Smart campagnestructuren, feed-optimalisatie, creative testing en
              AI-assistenten voor customer service en campagnes. Alles in elkaar
              geklikt zodat het schaalbaar blijft.
            </p>
            <ul class="mt-2 space-y-1 text-[11px] text-amber-300/80">
              <li>• Google Ads / Meta / Pinterest in één raamwerk</li>
              <li>• POAS / ROAS scenario’s doorrekenen</li>
              <li>• AI-prompts & workflows ingebed in je proces</li>
            </ul>
          </article>

          <!-- Data & Dashboards -->
          <article
            class="border border-amber-900/60 bg-gradient-to-b from-black/60 to-black/20 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
            <div class="flex items-center gap-3">
              <div
                class="h-9 w-9 rounded-full border border-amber-500/50 flex items-center justify-center bg-black/60"
              >
                <LineChart class="w-4 h-4 text-amber-300" />
              </div>
              <h2 class="text-sm tracking-[0.28em] uppercase text-amber-200/90">
                Data &amp; Dashboards
              </h2>
            </div>
            <p class="text-sm text-amber-100/80">
              Van “waar is mijn omzet heen?” naar een rustig dashboard dat per
              kanaal, campagne en funnel laat zien wat er écht gebeurt.
            </p>
            <ul class="mt-2 space-y-1 text-[11px] text-amber-300/80">
              <li>• GA4, BigQuery &amp; Looker Studio set-up</li>
              <li>• Custom ROAS / POAS dashboards</li>
              <li>• Funnel- en cohort-analyses</li>
            </ul>
          </article>

          <!-- Productconfigurators -->
          <article
            class="border border-amber-900/60 bg-gradient-to-b from-black/60 to-black/20 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
            <div class="flex items-center gap-3">
              <div
                class="h-9 w-9 rounded-full border border-amber-500/50 flex items-center justify-center bg-black/60"
              >
                <Boxes class="w-4 h-4 text-amber-300" />
              </div>
              <h2 class="text-sm tracking-[0.28em] uppercase text-amber-200/90">
                Productconfigurators
              </h2>
            </div>
            <p class="text-sm text-amber-100/80">
              Interactieve configurators die je offerte-proces, leadkwaliteit én
              klantbeleving tegelijk verbeteren. Van B2B-maatwerk tot 3D-shop
              experiences.
            </p>
            <ul class="mt-2 space-y-1 text-[11px] text-amber-300/80">
              <li>• Functioneel concept &amp; UX flow</li>
              <li>• Data-model &amp; koppelingen met Shopify / WordPress</li>
              <li>• Samenwerken met dev-team of eigen developers</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Stack / tooling -->
      <section
        class="border-t border-amber-900/40 bg-gradient-to-r from-black via-zinc-950/60 to-black"
      >
        <div class="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12">
          <p class="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 mb-4">
            Stack
          </p>
          <div
            class="flex flex-wrap gap-3 text-[11px] tracking-[0.22em] uppercase text-amber-200/80"
          >
            <span
              class="px-3 py-1 rounded-full border border-amber-900/70 bg-black/60"
            >
              GA4 / BigQuery / Looker
            </span>
            <span
              class="px-3 py-1 rounded-full border border-amber-900/70 bg-black/60"
            >
              Google Ads / SA360
            </span>
            <span
              class="px-3 py-1 rounded-full border border-amber-900/70 bg-black/60"
            >
              Meta / Pinterest
            </span>
            <span
              class="px-3 py-1 rounded-full border border-amber-900/70 bg-black/60"
            >
              Shopify / WordPress
            </span>
            <span
              class="px-3 py-1 rounded-full border border-amber-900/70 bg-black/60"
            >
              Python / JS / Vue
            </span>
            <span
              class="px-3 py-1 rounded-full border border-amber-900/70 bg-black/60"
            >
              OpenAI / AI-agents
            </span>
          </div>
        </div>
      </section>
    </main>

    <MainFooter :sections="[]" :scroll-to-section="scrollToTop" />
  </div>
</template>

<script setup>
import { Cpu, LineChart, Boxes } from 'lucide-vue-next';
import MainNavbar from '@/vue/layout/MainNavbar.vue';
import MainFooter from '@/vue/layout/MainFooter.vue';
import { pages } from '@/vue/composables/useScrollStory';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
