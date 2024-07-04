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
const getProducts = async () => {
	loading.value = true
	const { data } = await useFetch(
		'https://6684d16356e7503d1ae140ec.mockapi.io/products'
	)
	products.value = data._rawValue
	loading.value = false
}

getProducts()
</script>

<template>
	<div class="container mt-[100px]">
		<div class="flex justify-between items-center">
			<h1 class="text-[40px] primary text-[Manrope] mb-[30px]">Популярные товары</h1>
			<nuxt-link to="/products"> <button
					class="flex items-center pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px]">Все товары <img
						class="w-[14px] h-[10px] ml-[6px]" src="../public/next.webp" alt=""></button></nuxt-link>
		</div>
		<div class="loading" v-if="loading">Loading ...</div>
		<div class="grid-cols-2 grid md:grid-cols-4 gap-4">
			<nuxt-link v-for="item in products" :key="item?.id"  :to="'/products/' + item?.id">
				<ProductCard :data="item" />
			</nuxt-link>
		</div>
	</div>
</template>

<style scoped></style>