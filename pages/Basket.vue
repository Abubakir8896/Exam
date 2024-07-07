<script setup>
useHead({
    title: 'Main page',
    link: {
        href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
        rel: 'stylesheet',
    },
})
import { usePiniaStore } from '../store'

const store = usePiniaStore()

const products = store.basket
</script>

<template>
    <div class="container mt-[60px] mb-[80px]">
        <div class="relative w-[400px]">
            <div>
                <h1 class="text-[64px] primary text-[Manrope] mb-[30px]">Корзина</h1>
            </div>
            <div v-if="store.basket.length > 0" class="absolute top-6 right-[140px] text-[#fff] w-[22px] h-[18px] ">
                <h1 class="bg-[#C63C3C] text-center border rounded-full text-[12px]">{{ store.basket.length }}</h1>
            </div>
        </div>
        <div class="w-full bg-[#F2F2F2] rounded-[20px] p-[30px] pl-[50px] pr-[180px]">
            <div class="flex justify-between items-center">
                <div class="w-[170px] flex justify-between">
                    <p class="text-primary text-[16px]">Фото</p>
                    <p class="text-primary text-[16px]">Товары</p>
                </div>
                <p class="text-primary text-[16px]">Описание</p>
                <p class="text-primary text-[16px]">Артикул</p>
                <p class="text-primary text-[16px]">Количество</p>
            </div>
            <div v-for="item in products">
                <div class="mt-[20px]">
                    <hr class="text-[#000]">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>