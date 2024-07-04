<script setup>
const props = defineProps({
    data: Object,
})
import {usePiniaStore} from '../store'

const store = usePiniaStore()

const isLiked  = computed(() => {
    const index = store.likedProducts.findIndex(p => p.id == props.data.id)
    return index==-1
})

</script>

<template>
    <div class="relative px-3 py-[30px] bg-white shadow-lg rounded-md">
        <div class="flex justify-between">
            <img :src="props.data?.image" alt="image" class="w-[65%] h-[220px] object-cover mx-auto rounded mb-2" />
        </div>
        <div class="w-[20px] h-[19px] absolute top-3 right-3 rounded-[3px]">
            <button @click.stop="store.addProductLiked(props.data)">
                <h1 v-if="isLiked">🤍</h1>
                <h1 v-else>❤</h1>
            </button>
        </div>
        <div class="flex flex-col gap-5 pl-6 mt-[30px]">
            <h2 class="text-[17px] max-w-[227px] text-[Manrope] primery">{{ props.data?.title }}</h2>
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="text-[12px] text-[#9F9F9F] line-through">
                        {{ props.data?.oldPrice }}₽
                    </h3>
                    <p class="text-[20px] primary">{{ props.data?.newPrice}}₽</p>
                </div> 
                <button class="bg-[#454545] p-[10px] rounded-[12px]">
                    <img class="w-[18px] h-[18px] ml-[11px] mr-[11px]" src="/bascket.png" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>