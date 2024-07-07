<template>
    <div class="container mt-[60px]">
        <div class="flex justify-between pb-4">
            <h2 class="text-2xl font-bold mb-6 text-center flex">Каталог</h2>
            <nuxt-link to="/catalog">
                <button
                class="border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3 hover:bg-primary hover:text-white">
                Весь каталог
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
                </svg>
            </button>
        </nuxt-link>
    </div>
    <router-link to="/catalog">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="item in catalogs" :key="item.title"
            class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover:bg-primary hover:text-white">
            <div class="flex flex-col justify-between h-[230px] p-2">
                <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
                <div class="flex justify-end">
                    <img :src="item.image" :alt="item.title"
                    class="max-md:mx-auto max-md:w-3/3 object-cover rounded-md" />
                </div>
                
                <p class="hover:text-white">{{ item.price }}</p>
            </div>
            </div>
        </div>
    </router-link>
</div>
</template>     
<script setup>
const catalogs = ref([
    {
        
        image: "catalog.png",
        title: 'Люстры',
        price: 'От 540₽ '
    },
    {
        image: "catalog1.png",
        title: 'Светильники',
        price: 'От 540₽ '
    },
    {
        image: "catalog2.png",
        title: 'Бра',
        price: 'От 540₽ '
    },
    {
        image: "catalog3.png",
        title: 'Торшеры',
        price: 'От 540₽ '
    },
    {
        image: "catalog4.png",
        title: 'Настольные лампы',
        price: 'От 540₽ '
    },
    {
        image: "catalog5.png",
        title: 'Споты',
        price: 'От 540₽ '
    }]
)
</script>