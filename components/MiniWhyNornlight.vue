<template>
    <div class="container mx-auto p-10">
  
      <div class="mt-16">
        <div class="flex justify-between pb-4">
          <h2 class="text-2xl font-bold mb-6 text-center flex">
            Почему Nornlight?
          </h2>
  
          <a href="/about"
            ><button
              class="border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3 hover:bg-primary hover:text-white"
            >
              О компании
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
              </svg></button
          ></a>
        </div>
  
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="benefit in datas"
            :key="benefit.title"
            class="bg-white p-4 rounded-lg shadow text-center"
          >
            <div class="mb-4">
              <img :src="benefit.imageSrc" alt="" class="flex p-8" />
            </div>
            <div class="py-5 p-5 text-start">
              <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
              <p class="text-gray-500">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
    const datas = ref([
        {
            image:'norlight.png',
            title:'Только проверенные бренды',
            description:'Бренды, проверенные временем и качеством'
        },
        {
            image:'norlight.png',
            title:'Самые низкие цены',
            description:'Ниже не будет нигде'
        },
        {
            image:'norlight.png',
            title:'Быстрая доствка',
            description:'Доставляем по всей РФ за 1-10 дней'
        },
        {
            image:'norlight.png',
            title:'Большой ассортимент',
            description:'Более 1000 товаров'
        },
    ])

</script>  