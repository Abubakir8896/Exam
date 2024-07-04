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

const products = store.likedProducts
</script>

<template>
    <div class="container mt-[60px] mb-[80px]">
        <div class="relative w-[400px]">
            <div>
                <h1 class="text-[40px] primary text-[Manrope] mb-[30px]">Избранные товары</h1>
            </div>
            <div class="absolute top-3 right-7 text-[#fff] w-[22px] h-[18px] ">
                <h1 class="bg-[#C63C3C] text-center border rounded-full text-[12px]">{{ store.likedProducts.length }}</h1>
            </div>
        </div>
        <div class="loading" v-if="loading">Loading ...</div>
        <div class="grid-cols-2 grid md:grid-cols-4 gap-4">
            <nuxt-link v-for="item in products" :key="item?.id">
                <ProductCard :data="item" />
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped></style>