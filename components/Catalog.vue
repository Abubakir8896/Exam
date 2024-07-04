<template>
    <div>
        <div class="container">
            <div class="flex justify-between items-center">
                <h1 class="text-[#454545] text-[40px] mb-[20px]">Каталог</h1>
                <button class="flex items-center pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px]">Весь
                    каталог <img class="w-[14px] h-[10px] ml-[6px]" src="../public/next.webp" alt=""></button>
            </div>
            <div class="md:grid grid-cols-3 gap-5">
                <div class="w-[420px] h-[250px] bg-[#F2F2F2] relative py-6 pl-10 rounded-[20px] hover:bg-[#454545] hover:text-[#fff] transition-shadow duration-800"
                    v-for="item in catalogs">
                    <div>
                        <p class="text-[Monrope] text-[20px]">{{ item.title }}</p>
                    </div>
                    <img class="w-[180px] h-[206px] absolute right-4 top-11" :src="item.image" alt="">
                    <div class="flex absolute bottom-6 justify-around items-center gap-4">
                        <p>{{ item.price }}</p>
                        <img class="w-[18px] h-[12px]" src="../public/next.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
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