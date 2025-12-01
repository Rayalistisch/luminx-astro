<template>
  <div
    class="relative min-h-screen text-amber-50 overflow-hidden flex flex-col scene-root"
    :class="activeScene.themeClass"
    :style="{
      '--bg-from': activeScene.colors.from,
      '--bg-to': activeScene.colors.to,
      '--accent': activeScene.colors.accent,
    }"
    @mousemove="handleMouseMove"
  >
    <!-- LETTERBOX -->
    <div class="letterbox letterbox-top"></div>
    <div class="letterbox letterbox-bottom"></div>

    <!-- AUDIO (VOICE-OVER / MUZIEK) -->
    <audio
      ref="audioRef"
      :src="audioSrc"
      preload="auto"
      @ended="onAudioEnded"
    ></audio>

    <!-- BACKGROUND: VIDEO + MAGIC -->
    <div class="pointer-events-none fixed inset-0 scene-bg">
      <!-- basis gradient -->
      <div class="absolute inset-0 scene-gradient"></div>

      <!-- VIDEO SCENES (allemaal zelfde background 4) -->
      <div
        v-for="(scene, index) in scenes"
        :key="scene.id"
        :class="[
          'scene-layer',
          index === currentSceneIndex ? 'scene-layer--active' : 'scene-layer--hidden'
        ]"
      >
        <video
          class="scene-video"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="scene.video" type="video/mp4" />
        </video>

        <!-- subtiele kleur lens op de video zelf -->
        <div class="absolute inset-0 scene-color-lens"></div>
      </div>

      <!-- blur + globale gradient met parallax -->
      <div
        class="video-blur-overlay"
        :style="parallaxStyle"
      ></div>

      <!-- sterke color grade per scene -->
      <div class="video-color-overlay"></div>

      <!-- extra magic / lijnen / orbits -->
      <div class="magic-orbit magic-orbit-main"></div>
      <div class="magic-orbit magic-orbit-secondary"></div>
      <div class="spell-streak spell-streak-1"></div>
      <div class="spell-streak spell-streak-2"></div>

      <!-- noise & vignette -->
      <div class="noise-layer"></div>
      <div class="vignette"></div>
    </div>

    <!-- MINIMALISTISCHE AUDIO BUTTON (DESKTOP + MOBIEL) -->
    <div class="audio-bar">
      <button
        type="button"
        class="audio-bar-play"
        @click="toggleAudioPlay"
      >
        <span v-if="!isAudioPlaying" class="audio-icon audio-icon-play"></span>
        <span v-else class="audio-icon audio-icon-pause">
          <span></span><span></span>
        </span>
      </button>
    </div>

    <!-- CONTENT -->
    <main class="relative z-40 flex-1 flex flex-col">
      <!-- top statusbar -->
      <header
        class="px-4 md:px-10 pt-6 flex items-center justify-between text-[10px] md:text-[11px] tracking-[0.26em] uppercase text-amber-200/80"
      >
        <span class="inline-flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400/90 animate-pulse"></span>
          LuminX · Trailer sequence
        </span>
        <span class="hidden md:inline-flex text-amber-300/80">
          Cinematic preview · Auto-play
        </span>
      </header>

      <!-- HERO / STORYTELLING -->
      <section
        class="hero-section flex items-center justify-center px-4 md:px-10 pb-16 pt-10 md:pt-6"
      >
        <div class="max-w-4xl text-center trailer-block">
          <p
            class="text-[10px] tracking-[0.32em] uppercase text-amber-300/85 mb-4 scene-tag"
          >
            {{ activeScene.tag }} · {{ activeScene.label }}
          </p>

          <h1
            class="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.22em] uppercase mb-5 leading-[1.4] hero-headline"
          >
            <span class="block">
              {{ activeScene.line1 }}
            </span>
            <span class="block text-amber-300">
              {{ activeScene.line2 }}
            </span>
          </h1>

          <p class="text-xs md:text-sm text-amber-100/85 mb-8 trailer-caption">
            {{ activeScene.caption }}
          </p>

          <div class="flex flex-col items-center gap-3">
            <!-- PAUSE / RESUME TRAILER (alleen visuals) -->
            <button
              type="button"
              class="relative inline-flex items-center justify-center px-4 py-2 rounded-full border border-amber-400/80 text-[10px] md:text-[11px] tracking-[0.2em] uppercase overflow-hidden group"
              @click="togglePause"
            >
              <span
                class="absolute inset-0 bg-amber-400/15 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-300"
              ></span>
              <span class="relative flex items-center gap-2">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-amber-300/90"></span>
                {{ isPaused ? 'Resume trailer' : 'Pause trailer' }}
              </span>
            </button>

            <span class="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-amber-300/70">
              Sequence loopt automatisch · ~3 sec per chapter
            </span>
          </div>
        </div>
      </section>

      <!-- DETAILS / EXPLANATION -->
      <section
        ref="detailsSection"
        class="border-t border-amber-900/70 bg-gradient-to-b from-black/96 to-black/99"
      >
        <div class="max-w-6xl mx-auto px-4 md:px-10 py-10 md:py-14">
          <p class="text-[10px] tracking-[0.28em] uppercase text-amber-300/80 mb-4">
            Wat hier uiteindelijk komt
          </p>
          <div class="grid md:grid-cols-3 gap-6 md:gap-8 text-amber-100/80">
            <div class="text-sm">
              <h3
                class="text-[12px] tracking-[0.18em] uppercase text-amber-200 mb-2"
              >
                Geen agency façade
              </h3>
              <p class="text-[13px] text-amber-100/80">
                LuminX wordt geen website vol stockfoto’s en vage slogans. Liever
                laten zien wat er echt gebouwd wordt: configurators, dashboards,
                contentmachines.
              </p>
            </div>
            <div class="text-sm">
              <h3
                class="text-[12px] tracking-[0.18em] uppercase text-amber-200 mb-2"
              >
                Playground voor e-commerce
              </h3>
              <p class="text-[13px] text-amber-100/80">
                Productconfigurators, slimme feeds, reporting-layers en
                AI-workflows. Dingen die je niet in een templateshop vindt, maar
                vanuit de praktijk van campagnes en data ontstaan.
              </p>
            </div>
            <div class="text-sm">
              <h3
                class="text-[12px] tracking-[0.18em] uppercase text-amber-200 mb-2"
              >
                Van experiment naar product
              </h3>
              <p class="text-[13px] text-amber-100/80">
                Veel begint hier als experiment. Wat blijft plakken, groeit door
                naar herbruikbare tools of frameworks die ook bij anderen landen.
              </p>
            </div>
          </div>

          <div
            class="mt-8 pt-5 border-t border-amber-900/70 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] md:text-[13px]"
          >
            <p class="text-amber-100/80 max-w-xl">
              Wil je alvast sparren over een configurator, datastructuur of gek
              idee? De site is nog in montage, maar de editor staat al open.
            </p>
            <a
              href="mailto:ray@luminx.studio?subject=LuminX%20-%20Sparren"
              class="inline-flex items-center justify-center px-4 py-2 rounded-full border border-amber-400/80 text-[10px] md:text-[11px] tracking-[0.2em] uppercase hover:bg-amber-400/10 transition"
            >
              Stuur een mail
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue';

const scenes = [
  {
    id: 'spark',
    tag: 'Scene I',
    label: 'The spark',
    line1: 'In een wereld vol standaard templates,',
    line2: 'ontstaat één rare zijweg.',
    caption:
      'Een performance marketeer die niet stopt bij campagnes, maar doortrekt naar tooling, data en configurators.',
    sequenceLabel: 'Waar het allemaal begint.',
    video: '/videos/scene-4.mp4',
    themeClass: 'scene-theme-spark',
    colors: {
      from: 'rgba(6, 78, 59, 0.85)',
      to: 'rgba(15, 23, 42, 0.98)',
      accent: 'rgba(251, 191, 36, 1)',
    },
  },
  {
    id: 'motion',
    tag: 'Scene II',
    label: 'Campaigns in motion',
    line1: 'Campagnes draaien als machines,',
    line2: 'maar onder de motorkap broeit iets.',
    caption:
      'Feeds, shopping, remarketing. Alles beweegt, maar het systeem erachter vraagt om iets slimmers dan nog een dashboard.',
    sequenceLabel: 'Campagnes als grondstof.',
    video: '/videos/scene-4.mp4',
    themeClass: 'scene-theme-motion',
    colors: {
      from: 'rgba(8, 47, 73, 0.9)',
      to: 'rgba(15, 23, 42, 0.99)',
      accent: 'rgba(56, 189, 248, 1)',
    },
  },
  {
    id: 'build',
    tag: 'Scene III',
    label: 'The build',
    line1: 'Code, UX en data',
    line2: 'vinden elkaar in nieuwe interfaces.',
    caption:
      'Productconfigurators, interne tools en AI-flows. Eerst maatwerk voor één case, dan blauwdruk voor meer.',
    sequenceLabel: 'De eerste echte bouwblokken.',
    video: '/videos/scene-4.mp4',
    themeClass: 'scene-theme-build',
    colors: {
      from: 'rgba(30, 64, 175, 0.9)',
      to: 'rgba(15, 23, 42, 0.99)',
      accent: 'rgba(129, 140, 248, 1)',
    },
  },
  {
    id: 'playground',
    tag: 'Scene IV',
    label: 'The playground',
    line1: 'En dan, langzaam,',
    line2: 'wordt het een eigen wereld.',
    caption:
      'Geen façade van een agency-site, maar een levende playground. Waar experimenten blijven hangen als producten.',
    sequenceLabel: 'De plek waar alles samenkomt.',
    video: '/videos/scene-4.mp4',
    themeClass: 'scene-theme-playground',
    colors: {
      from: 'rgba(88, 28, 135, 0.9)',
      to: 'rgba(15, 23, 42, 0.99)',
      accent: 'rgba(251, 191, 36, 1)',
    },
  },
];

const SCENE_DURATION = 3000; // ~3 sec per scene
const audioSrc = '/audio/luminx-voiceover1.mp3';

const currentSceneIndex = ref(0);
const isPaused = ref(false);
const timerId = ref(null);

const mouseX = ref(0.5);
const mouseY = ref(0.5);

const audioRef = ref(null);
const isAudioPlaying = ref(false);
const hasAudioEnded = ref(false);

const activeScene = computed(() => scenes[currentSceneIndex.value]);

const parallaxStyle = computed(() => {
  const x = (mouseX.value - 0.5) * 10; // -5 tot 5
  const y = (mouseY.value - 0.5) * 10;
  return {
    transform: `translate3d(${x}px, ${y}px, 0)`,
  };
});

const startTimer = () => {
  clearTimer();
  timerId.value = window.setInterval(() => {
    if (!isPaused.value) {
      nextScene();
    }
  }, SCENE_DURATION);
};

const clearTimer = () => {
  if (timerId.value) {
    window.clearInterval(timerId.value);
    timerId.value = null;
  }
};

const nextScene = () => {
  currentSceneIndex.value =
    (currentSceneIndex.value + 1) % scenes.length;
};

const togglePause = () => {
  // Alleen visuals pauzeren
  isPaused.value = !isPaused.value;
};

const tryAutoplayAudio = () => {
  if (!audioRef.value) return;
  audioRef.value
    .play()
    .then(() => {
      isAudioPlaying.value = true;
      hasAudioEnded.value = false;
    })
    .catch(() => {
      // Browser blokkeert autoplay; user kan de knop gebruiken
      isAudioPlaying.value = false;
    });
};

const toggleAudioPlay = () => {
  if (!audioRef.value) return;
  if (isAudioPlaying.value) {
    audioRef.value.pause();
    isAudioPlaying.value = false;
  } else {
    if (hasAudioEnded.value) {
      audioRef.value.currentTime = 0;
      hasAudioEnded.value = false;
    }
    audioRef.value
      .play()
      .then(() => {
        isAudioPlaying.value = true;
      })
      .catch(() => {
        // play geblokkeerd
      });
  }
};

const onAudioEnded = () => {
  isAudioPlaying.value = false;
  hasAudioEnded.value = true;
};

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  mouseX.value = Math.min(Math.max(x, 0), 1);
  mouseY.value = Math.min(Math.max(y, 0), 1);
};

onMounted(() => {
  startTimer();      // auto-play visuals
  tryAutoplayAudio(); // probeert audio 1x automatisch af te spelen
});

onBeforeUnmount(() => {
  clearTimer();
  if (audioRef.value) {
    audioRef.value.pause();
  }
});
</script>

<style scoped>
/* LETTERBOX */
.letterbox {
  position: fixed;
  left: 0;
  right: 0;
  height: 52px;
  background: #000;
  z-index: 60;
  pointer-events: none;
}
.letterbox-top {
  top: 0;
}
.letterbox-bottom {
  bottom: 0;
}

/* BASIS BG */
.scene-root {
  background: radial-gradient(circle at 20% 0%, var(--bg-from), #020617);
  transition:
    background 900ms ease,
    color 800ms ease;
}
.scene-bg {
  mix-blend-mode: normal;
}

/* gradient achter de video */
.scene-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0% 0%, var(--accent, rgba(251, 191, 36, 0.6)), transparent 45%),
    radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.5), transparent 55%),
    linear-gradient(140deg, var(--bg-from), var(--bg-to));
  opacity: 0.85;
  mix-blend-mode: soft-light;
  transition: background 1000ms ease, opacity 800ms ease;
}

/* video layer */
.scene-layer {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.03);
  transition:
    opacity 900ms ease-out,
    transform 3200ms ease-out;
}
.scene-layer--active {
  opacity: 1;
  transform: scale(1);
  z-index: 10;
}
.scene-layer--hidden {
  opacity: 0;
  z-index: 0;
}

.scene-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* kleur lens op de video */
.scene-color-lens {
  position: absolute;
  inset: 0;
  mix-blend-mode: overlay;
  opacity: 0.6;
  transition: opacity 800ms ease;
}

.scene-theme-spark .scene-color-lens {
  background: radial-gradient(circle at 10% 10%, rgba(52, 211, 153, 0.6), transparent 50%);
}
.scene-theme-motion .scene-color-lens {
  background: radial-gradient(circle at 90% 20%, rgba(56, 189, 248, 0.7), transparent 55%);
}
.scene-theme-build .scene-color-lens {
  background: radial-gradient(circle at 40% 100%, rgba(129, 140, 248, 0.7), transparent 55%);
}
.scene-theme-playground .scene-color-lens {
  background:
    radial-gradient(circle at 10% 90%, rgba(244, 114, 182, 0.7), transparent 55%),
    radial-gradient(circle at 80% 0%, rgba(251, 191, 36, 0.4), transparent 55%);
}

/* blur + extra gradient */
.video-blur-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  background:
    radial-gradient(
      circle at 10% 0%,
      rgba(251, 191, 36, 0.16),
      transparent 50%
    ),
    radial-gradient(
      circle at 90% 100%,
      rgba(56, 189, 248, 0.2),
      transparent 55%
    ),
    linear-gradient(
      160deg,
      rgba(0, 0, 0, 0.75),
      rgba(15, 23, 42, 0.95),
      rgba(0, 0, 0, 0.98)
    );
  mix-blend-mode: soft-light;
  opacity: 0.95;
  pointer-events: none;
  transition: opacity 600ms ease, background 1000ms ease, transform 200ms ease-out;
}

/* sterke color grade bovenop */
.video-color-overlay {
  position: absolute;
  inset: 0;
  z-index: 22;
  pointer-events: none;
  background:
    radial-gradient(
      circle at 20% 10%,
      rgba(251, 191, 36, 0.55),
      transparent 55%
    ),
    radial-gradient(
      circle at 80% 90%,
      rgba(248, 250, 252, 0.15),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.4),
      rgba(15, 23, 42, 0.9)
    );
  mix-blend-mode: color;
  opacity: 0.85;
  transition:
    opacity 500ms ease,
    background 900ms ease;
}

/* per scene andere tint */
.scene-theme-spark .video-color-overlay {
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(52, 211, 153, 0.7),
      transparent 55%
    ),
    linear-gradient(
      160deg,
      rgba(3, 7, 18, 0.6),
      rgba(6, 95, 70, 0.95),
      rgba(15, 23, 42, 0.98)
    );
}
.scene-theme-motion .video-color-overlay {
  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(56, 189, 248, 0.75),
      transparent 55%
    ),
    linear-gradient(
      160deg,
      rgba(15, 23, 42, 0.7),
      rgba(8, 47, 73, 0.98),
      rgba(15, 23, 42, 1)
    );
}
.scene-theme-build .video-color-overlay {
  background:
    radial-gradient(
      circle at 50% 100%,
      rgba(129, 140, 248, 0.8),
      transparent 55%
    ),
    linear-gradient(
      160deg,
      rgba(15, 23, 42, 0.7),
      rgba(30, 64, 175, 0.98),
      rgba(15, 23, 42, 1)
    );
}
.scene-theme-playground .video-color-overlay {
  background:
    radial-gradient(
      circle at 10% 100%,
      rgba(244, 114, 182, 0.9),
      transparent 55%
    ),
    radial-gradient(
      circle at 90% 0%,
      rgba(251, 191, 36, 0.45),
      transparent 55%
    ),
    linear-gradient(
      160deg,
      rgba(15, 23, 42, 0.7),
      rgba(88, 28, 135, 0.98),
      rgba(15, 23, 42, 1)
    );
}

/* MAGIC */
.magic-orbit {
  position: absolute;
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(251, 191, 36, 0.35);
  box-shadow: 0 0 40px rgba(251, 191, 36, 0.35);
  pointer-events: none;
}
.magic-orbit-main {
  width: 1200px;
  height: 1200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbitMain 32s linear infinite;
}
.magic-orbit-secondary {
  width: 680px;
  height: 680px;
  top: 55%;
  left: 40%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  animation: orbitSecondary 24s linear infinite;
}

.spell-streak {
  position: absolute;
  width: 220px;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(251, 191, 36, 0.9),
    transparent
  );
  filter: blur(0.5px);
  opacity: 0.7;
  pointer-events: none;
}
.spell-streak-1 {
  top: 26%;
  left: -10%;
  animation: streak 9s ease-in-out infinite;
}
.spell-streak-2 {
  bottom: 16%;
  right: -15%;
  animation: streak 11s ease-in-out infinite reverse;
}

/* Noise & vignette */
.noise-layer {
  position: absolute;
  inset: 0;
  z-index: 30;
  mix-blend-mode: soft-light;
  opacity: 0.7;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='noStitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.22'/%3E%3C/svg%3E");
}
.vignette {
  position: absolute;
  inset: 0;
  z-index: 31;
  box-shadow: inset 0 0 180px rgba(0, 0, 0, 0.98);
}

/* HERO SECTIE: vaste hoogte */
.hero-section {
  min-height: calc(100vh - 180px);
}

@media (max-width: 767px) {
  .hero-section {
    min-height: calc(100vh - 150px);
  }
}

/* AUDIO BUTTON (MINIMAL) */
.audio-bar {
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  z-index: 70;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(161, 98, 7, 0.7);
  background: radial-gradient(circle at 0% 0%, rgba(17, 24, 39, 0.96), rgba(0, 0, 0, 0.96));
  box-shadow:
    0 0 18px rgba(15, 23, 42, 0.9),
    0 0 24px rgba(251, 191, 36, 0.18);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.audio-bar-play {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  border: 1px solid rgba(251, 191, 36, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 0%, rgba(251, 191, 36, 0.25), rgba(15, 23, 42, 0.95));
  cursor: pointer;
  transition:
    transform 120ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.audio-bar-play:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 14px rgba(251, 191, 36, 0.65);
  border-color: rgba(250, 204, 21, 1);
}

/* play icoon (driehoek) */
.audio-icon-play {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 11px solid #facc15;
  margin-left: 2px;
}

/* pause icoon (||) */
.audio-icon-pause {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.audio-icon-pause span {
  display: block;
  width: 3px;
  height: 13px;
  border-radius: 9999px;
  background: #facc15;
}

/* label */
.audio-bar-label {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(249, 250, 251, 0.78);
}

/* mobiel iets compacter */
@media (max-width: 480px) {
  .audio-bar {
    bottom: 1rem;
    padding-inline: 0.7rem;
    gap: 0.4rem;
  }
}

/* COPY / ANIMATIES */
.trailer-block {
  animation: trailerIn 1.1s ease-out;
}
.scene-tag {
  animation: fadeIn 0.6s ease-out;
}
.hero-headline {
  animation: fadeSlideUp 0.9s ease-out 0.1s forwards;
  opacity: 0;
}
.trailer-caption {
  animation: fadeSlideUp 0.9s ease-out 0.25s forwards;
  opacity: 0;
}

@keyframes orbitMain {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes orbitSecondary {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes streak {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  50% {
    transform: translateX(120vw) translateY(-20px);
    opacity: 0.6;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
}

@keyframes trailerIn {
  0% {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
