<template>
  <section
    id="vial"
    class="relative min-h-screen flex items-center justify-center py-24 overflow-hidden z-10"
  >
    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="
        background-image:
          linear-gradient(180deg,rgba(0, 0, 0, 0.86),rgba(0, 0, 0, 0.84)),
          url('https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg?auto=compress&cs=tinysrgb&w=1600');
      "
    />

    <div class="relative z-10 text-center px-4">
      <p class="text-[15px] tracking-[0.3em] text-amber-300/80 uppercase mb-24">
        Chapter II
      </p>

      <!-- Vial -->
      <div
        class="mb-10"
        :style="{
          transform:
            'scale(' +
            getScale(1100, 1500, 0.9) +
            ') translateY(' +
            getTranslateY(1100, 1500, 40) +
            'px)',
          opacity: getOpacity(1100, 1500),
        }"
      >
        <div
          class="vial-shell w-64 h-96 mx-auto relative rounded-t-[52%] rounded-b-[28px] bg-[rgba(240,200,120,0.08)] border border-[rgba(250,250,210,0.4)] backdrop-blur-[3px]"
        >
          <!-- dop -->
          <div
            class="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-t-[10px] bg-gradient-to-b from-[#b49a63] to-[#7a6237] shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          />

          <!-- vloeistofcontainer (clip) -->
          <div
            class="potion-liquid absolute inset-x-[10%] bottom-[10%] h-[55%] rounded-t-[45%] rounded-b-[22px] overflow-hidden"
          >
            <!-- basiskleur / diepte -->
            <div class="potion-liquid-body" />

            <!-- wave lagen -->
            <div class="potion-wave potion-wave--back" />
            <div class="potion-wave potion-wave--front" />

            <!-- belletjes -->
            <div
              v-for="i in 6"
              :key="i"
              class="potion-bubble"
              :style="{
                left: 15 + i * 10 + '%',
                animationDelay: (i * 0.8) + 's',
                animationDuration: 5 + i * 0.7 + 's',
              }"
            />

            <!-- zacht licht van onder -->
            <div class="potion-bottom-glow" />
          </div>

          <!-- label -->
          <div
            class="absolute bottom-7 left-1/2 -translate-x-1/2 px-4 py-2 text-[10px] tracking-[0.3em] uppercase bg-black/70 border border-amber-200/40 text-amber-100/90"
          >
            LuminX Experiment
          </div>
        </div>
      </div>

      <p
        class="text-2xl md:text-3xl text-amber-100/90 max-w-3xl mx-auto"
        :style="{
          opacity: getOpacity(1300, 1700),
          transform: 'translateY(' + getTranslateY(1300, 1700, 40) + 'px)',
        }"
      >
        You don&apos;t find it in a shop or in a neatly labelled cabinet. You
        notice it in passing, on a high shelf in a locked office: a vial that
        doesn&apos;t just catch the light – it bends it, as if the room is
        tilting toward it.
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  getOpacity: { type: Function, required: true },
  getTranslateY: { type: Function, required: true },
  getScale: { type: Function, required: true },
});
</script>

<style scoped>
.vial-shell {
  box-shadow:
    0 0 60px rgba(248, 250, 252, 0.08),
    0 25px 70px rgba(0, 0, 0, 0.9);
}

/* container waar liquid in zit */
.potion-liquid {
  border-radius: 148px 148px 126px 126px;
  /* lichte glasrand */
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.15),
    inset 0 18px 32px rgba(0, 0, 0, 0.35);
}

/* basis van de vloeistof */
.potion-liquid-body {
  position: absolute;
  inset: 3% 4% 8%;
  border-radius: 142px 142px 124px 124px;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.45), transparent 55%),
    radial-gradient(circle at 80% 14%, rgba(255, 255, 255, 0.28), transparent 60%),
    radial-gradient(circle at 50% 90%, rgba(255, 238, 188, 0.9), transparent 70%),
    linear-gradient(to top, #8c4d15 0%, #c88a2e 36%, #f4c567 72%, #f7e0a4 100%);
  box-shadow:
    0 0 40px rgba(245, 214, 138, 0.55),
    0 -10px 30px rgba(255, 255, 255, 0.25);
  opacity: 0.98;
  overflow: hidden;
}

/* extra zachte “caustics” en soft-light layers */
.potion-liquid-body::before {
  content: '';
  position: absolute;
  inset: 10% 8% 26%;
  border-radius: 40px;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.55), transparent 60%),
    radial-gradient(circle at 80% 15%, rgba(255, 255, 255, 0.28), transparent 65%);
  mix-blend-mode: soft-light;
  opacity: 0.9;
}

.potion-liquid-body::after {
  content: '';
  position: absolute;
  inset: 45% 5% 8%;
  border-radius: 40px 40px 24px 24px;
  background:
    radial-gradient(circle at 50% 100%, rgba(255, 238, 185, 0.85), transparent 65%);
  mix-blend-mode: screen;
  opacity: 0.9;
}

/* golvende toplaag – veel zachter, meer blur */
.potion-wave {
  position: absolute;
  width: 30%;
  height: 150%;
  border-radius: 45%;
  top: -14%;
  left: -65%;
  background:
    radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.7), transparent 55%),
    radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.18), transparent 70%);
  opacity: 0.45;
  mix-blend-mode: screen;
  filter: blur(4px);
  animation-name: potionWaveMove;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.potion-wave--back {
  animation-duration: 14s;
  animation-direction: alternate;
  transform: translate3d(-6%, 5%, 0) rotate(2deg);
  opacity: 0.32;
}

.potion-wave--front {
  animation-duration: 9s;
  animation-direction: alternate-reverse;
  transform: translate3d(0%, 1%, 0) rotate(-1deg);
  opacity: 0.5;
}

/* belletjes – iets kleiner en zachter */
.potion-bubble {
  position: absolute;
  bottom: 6%;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.05));
  box-shadow:
    0 0 8px rgba(255, 255, 255, 0.4),
    0 0 14px rgba(249, 250, 250, 0.35);
  opacity: 0;
  animation-name: potionBubbleRise;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}

/* zacht glow aan onderkant vloeistof */
.potion-bottom-glow {
  position: absolute;
  bottom: -10%;
  left: 50%;
  width: 140%;
  height: 55%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle at 50% 100%,
    rgba(255, 241, 178, 0.85),
    transparent 65%
  );
  mix-blend-mode: screen;
  opacity: 0.9;
}

/* animaties */
@keyframes potionWaveMove {
  0% {
    transform: translate3d(-10%, 6%, 0) rotate(2deg);
  }
  25% {
    transform: translate3d(3%, 2%, 0) rotate(-0.5deg);
  }
  50% {
    transform: translate3d(9%, -1%, 0) rotate(1.2deg);
  }
  75% {
    transform: translate3d(0%, 3%, 0) rotate(-0.4deg);
  }
  100% {
    transform: translate3d(-10%, 6%, 0) rotate(2deg);
  }
}

@keyframes potionBubbleRise {
  0% {
    transform: translate3d(0, 0, 0) scale(0.6);
    opacity: 0;
  }
  12% {
    opacity: 0.7;
  }
  40% {
    transform: translate3d(0, -42px, 0) scale(0.9);
    opacity: 0.9;
  }
  70% {
    transform: translate3d(0, -86px, 0) scale(0.85);
    opacity: 0.45;
  }
  100% {
    transform: translate3d(0, -118px, 0) scale(0.7);
    opacity: 0;
  }
}
</style>
