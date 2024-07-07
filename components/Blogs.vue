<script setup>
useHead({
	title: 'Main page',
	link: {
		href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
		rel: 'stylesheet',
	},
})
const products = ref(null)
const loading = ref(false)
const { data } = await useFetch(
    'https://66861ed583c983911b00e13f.mockapi.io/blog'
)
products.value = data.value
loading.value = false
</script>

<template>
    <div class="container">
        <div class="flex justify-between items-center ">
            <h1 class="text-[40px] primary text-[Manrope] mb-[30px]">Блог</h1>
            <nuxt-link to="/blog"> <button
                    class="hover:bg-primary hover:text-[#fff] flex items-center pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px]">Перейти в блог
                    <img class="w-[14px] h-[10px] ml-[6px]" src="../public/next.webp" alt=""></button></nuxt-link>
        </div>
        <div class="md:grid grid-cols-3 gap-3">
            <div v-for="item in data" class="flex">
                <div class="w-[420px] h-[456px]">
                    <img :src="item.image" alt="image" class="w-[100%] h-[304px] rounded-[10px]" />
                    <div class="mt-[30px] mb-[20px]">
                        <div class="flex justify-between items-center pr-[20px] mb-[30px]">
                            <h1 class="text-[20px] max-w-[227px] text-[Manrope] primery/500">{{ item.title }}</h1>
                            <img class="w-[16px] h-[16px]" src="../public/BlogIcon.png" alt="">
                        </div>
                        <p class="text-[15px] primary/50">01.01.2024 </p>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>