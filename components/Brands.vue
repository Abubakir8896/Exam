<script setup>
const speed = ref(10)

const speedUp = () => {
  if (speed.value > 1) {
    speed.value--
  }
}

const speedDown = () => {
  if (speed.value < 10) {
    speed.value++
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2
        class="text-[#454545] text-[18px] text-[Monrope] primary w-[500px] leading-[38px] md:text-3xl"
      >
        Только проверенные бренды
      </h2>
      <div class="flex md:gap-2">
        <i
          class="bx hover:text-primary/50 bx-left-arrow-alt flex items-center rounded-[100px] border px-1 sm:px-1 md:px-4 text-xl"
          @click="speedDown"
        ></i>
        <i
          class="bx hover:text-primary/50 bx-right-arrow-alt flex items-center rounded-[20px] items-center border px-1 sm:px-1 md:px-4 text-xl"
          @click="speedUp"
        ></i>
      </div>
    </div>
    <ClientOnly>

      <Vue3Marquee :duration="speed">
      <img src="../public/brand.png" alt="" class="px-2" />
      <img src="../public/brand1.png" alt="" class="px-2" />
      <img src="../public/brand2.png" alt="" class="px-2" />
      <img src="../public/brand.png" alt="" class="px-2" />
    </Vue3Marquee>
</ClientOnly>
  </div>
</template>

<style scoped></style>