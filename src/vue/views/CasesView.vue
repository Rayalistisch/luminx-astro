<template>
  <div class="bg-black text-amber-50 min-h-screen flex flex-col">
    <MainNavbar :pages="pages" />

    <main class="flex-1 pt-24">
      <section class="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <p class="text-[15px] tracking-[0.35em] uppercase text-amber-300/80 mb-4">
          Cases
        </p>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase mb-4"
            >
              Werk dat <span class="text-amber-300">doorloopt</span>.
            </h1>
            <p class="text-sm md:text-base text-amber-100/80 max-w-xl">
              Wij bouwen geen campagnes om eenmalig te draaien. Jouw bedrijf moet begrepen worden, fans ontwikkelen.
            </p>
          </div>
          <div
            class="text-[11px] text-amber-300/80 uppercase tracking-[0.22em] flex flex-col items-start md:items-end gap-1"
          >
            <span>Retail, B2B &amp; SaaS</span>
            <span class="opacity-80 flex flex-col items-start md:items-end gap-1">E-commerce first, maar niet alleen.</span>
          </div>
        </div>

        <!-- Case grid -->
        <div class="mt-12 grid md:grid-cols-2 gap-8">
          <article
            v-for="caseItem in cases"
            :key="caseItem.client"
            class="border border-amber-900/60 rounded-2xl bg-gradient-to-b from-black/70 to-black/30 p-6 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          >
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-[10px] tracking-[0.28em] uppercase text-amber-300/80">
                  {{ caseItem.client }}
                </p>
                <p class="text-xs text-amber-200/70">
                  {{ caseItem.segment }}
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-amber-400/80 uppercase tracking-[0.22em]">
                  Key metric
                </p>
                <p class="text-lg font-light text-amber-200">
                  {{ caseItem.metric }}
                </p>
              </div>
            </div>
            <p class="text-sm text-amber-100/85">
              {{ caseItem.story }}
            </p>
            <div class="flex flex-wrap gap-2 text-[10px] tracking-[0.22em] uppercase">
              <span
                v-for="tag in caseItem.tags"
                :key="tag"
                class="px-2 py-1 rounded-full border border-amber-900/70 bg-black/60 text-amber-200/80"
              >
                {{ tag }}
              </span>
            </div>
          </article>
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

const cases = [
  {
    client: 'Snow / Board Retail',
    segment: 'E-commerce • NL / EU',
    metric: '+68% omzet / +42% ROAS',
    story:
      'Van versnipperde campagnes naar 1 gecombineerd account met feed-optimalisatie, seizoen-scenario’s en data-gedreven budgetten. Minder stress in Q4, meer grip op marge.',
    tags: ['Google Ads', 'PMax', 'Feed setup', 'Dashboards'],
  },
  {
    client: 'Tools & Equipment',
    segment: 'B2B + E-commerce • EU',
    metric: '+31% omzet via non-brand',
    story:
      'Opnieuw ingerichte zoekstructuur met productclusters, nieuwe landingspagina’s en een duidelijker funnel. Non-brand werd weer een groeimotor in plaats van een kostenpost.',
    tags: ['Search structuur', 'AEO', 'Landingpages'],
  },
  {
    client: 'Brandstore Fashion',
    segment: 'E-commerce • NL',
    metric: '+55% e-mail revenue',
    story:
      'Klaviyo flows, betere segmentatie en een koppeling met on-site gedrag zorgden voor veel meer relevante mails. Minder spamgevoel, meer herhaalaankopen.',
    tags: ['Klaviyo', 'Flows', 'Segmentatie'],
  },
  {
    client: 'SaaS / B2B',
    segment: 'Leads • NL / DACH',
    metric: '-37% CPA • +kwalificatie',
    story:
      'Van “alle leads naar sales” naar een funnel met kwalificatievragen, score en beter ingerichte campagnes. Minder volume, maar veel betere gesprekken.',
    tags: ['Leadgen', 'Formulieren', 'Scoring'],
  },
];
</script>
