<script setup>
const props = defineProps({
    data: Object,
})
</script>

<template>
    <div class="px-3 py-[30px] bg-white shadow-lg rounded-md">
        <div class="flex justify-between px-2">
            <img :src="props.data?.image" alt="image" class="w-[80%] h-[220px] object-cover pl-[50px] rounded mb-2" />
            <img class="w-[20px] h-[19px] rounded-[3px]" src="/like.svg" />
        </div>
        <div class="flex flex-col gap-5 pl-6 mt-[30px]">
            <h2 class="text-[20px] max-w-[227px] text-[Manrope] primery">{{ props.data?.title }}</h2>
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="text-[12px] text-[#9F9F9F] line-through">
                        {{ props.data?.oldPrice }}₽
                    </h3>
                    <p class="text-[20px] primary">{{ props.data?.newPrice }}₽</p>
                </div> 
                <button class="bg-[#454545] p-[10px] rounded-[12px]">
                    <img class="w-[18px] h-[18px] ml-[11px] mr-[11px]" src="/bascket.png" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>