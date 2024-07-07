<script setup>
useHead({
	title: 'Main page',
	link: {
		href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
		rel: 'stylesheet',
	},
})
let loading = true
const { data } = await useFetch(
	'https://6684d16356e7503d1ae140ec.mockapi.io/products'
)
loading = false

</script>
z
<template>
	<div class="container mt-[100px]">
		<div class="flex justify-between items-center">
			<h1 class="text-[30px] md:text-[40px] primary text-[Manrope] mb-[30px]">Популярные товары</h1>
			<nuxt-link class="md:block hidden" to="/products"> <button
					class="flex items-center pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px]">Все товары <img
						class="w-[14px] h-[10px] ml-[6px]" src="../public/next.webp" alt=""></button></nuxt-link>
		</div>
		<div v-if="loading"><Loading /></div>
		<div class="grid-cols-2 grid md:grid-cols-4 gap-4 w-full">
				<ProductCard v-for="item in data" :key="item.id" :data="item" />
		</div>
		<nuxt-link to="/products"> <button
					class="hover:bg-primary hover:text-[#fff] flex justify-center items-center w-[350px] pt-[10px] pb-[10px] mt-[20px]  border rounded-[100px] block md:hidden">Все товары <img
						class="w-[14px] h-[10px] ml-[6px]" src="../public/next.webp" alt=""></button></nuxt-link>
	</div>
</template>

<style scoped></style>