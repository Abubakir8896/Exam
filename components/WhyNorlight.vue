<template>
    <div>
        <div class="container">
            <div class="flex justify-between items-center">
                <h1 class="text-[#454545] text-[40px] mb-[20px]">Почему NORNLIGHT?</h1>
                <nuxt-link to="/about">
                    <button class="pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px] flex items-center justify-between">О компании <img class="ml-[5px] w-[18px] h-[15px]"  src="../public/next.webp" alt=""></button>
                </nuxt-link>
            </div>
            <div class="md:grid grid-cols-4 gap-5">
                <div class="hover:shadow-lg transition-shadow duration-800" v-for="item in datas">                    
                    <div class="w-[310px] h-full border rounded p-[26px]">
                        <div class="bg-primary w-[80px] h-[80px] flex justify-center rounded-[10px] items-center p-20px">
                            <img class="w-[60px] h-[60px]" :src="item.image" alt="">
                        </div>
                        <p class="text-[Monrope] text-[20px] text-[#454545] mt-[100px]">{{ item.title }}</p>
                        <p class="text-[Monrope] text-[16px] text-[#454545] mt-[10px]">{{ item.description }}</p>
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