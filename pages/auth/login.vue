<template>
	<div class="bg-gray-300 h-screen flex justify-center items-center">
		<div class="bg-white w-[500px] p-10 rounded">
			<h1 class="text-center text-3xl mb-5">Login</h1>
			<form @submit.prevent="loginUser" class="flex flex-col gap-5">
				<label for="">
					Username
					<input v-model="userData.username"
						class="text-black text-xl w-full py-3 px-5 border rounded outline-none focus:border-primary"
						type="text" />
				</label>
				<label for="" class="relative">
					Password
					<input v-model="userData.password"
						class="text-black text-xl w-full py-3 px-5 border rounded outline-none focus:border-primary"
						type='text' />
				</label>
				<button @click="loginUser" class="py-3 px-5 text-xl bg-primary rounded text-white">
					Login
				</button>
			</form>
		</div>
	</div>
</template>
<script setup>
definePageMeta({
	layout: "auth",
});
import axios from 'axios'
const router = useRouter()
const userData = reactive({
	username: 'emilys',
	password: 'emilyspass',
})
const loginUser = () => {
	axios
		.post('https://dummyjson.com/auth/login', userData)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			router.push('/admin/dashboard')
		})
		.catch(err => {
			console.log('err', err)
		})
}
</script>
<style scoped></style>