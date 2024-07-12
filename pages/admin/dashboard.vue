<script setup>
definePageMeta({
    layout: "admin",
    middleware:['auth']
});
import { usePiniaStore } from '../store'

const store = usePiniaStore()
const { data } = await useFetch(
    `https://66861ed583c983911b00e13f.mockapi.io/product`
)
</script>

<template>
    <div class="flex justify-around">
        <div class="w-[400px] mt-[30px] h-[250px] bg-primary/10 p-[20px] pl-[50px] rounded-[20px]">
            <h1 class="text-[64px] text-[Monrope] text-primary/500">{{ data.length }}</h1>
            <p class="text-[40px] mt-[55px] text-[Monrope] text-primary/500">Products</p>
        </div>
        <div class="w-[400px] mt-[30px] h-[250px] bg-primary/10 p-[20px] pl-[50px] rounded-[20px]">
            <h1 class="text-[64px] text-[Monrope] text-primary/500">{{ store.orders.length }}</h1>
            <p class="text-[40px] mt-[55px] text-[Monrope] text-primary/500">Orders</p>
        </div>
    </div>
</template>

<style scoped></style>
