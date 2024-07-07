<script setup>
import { usePiniaStore } from '../store'
import axios from 'axios'

const store = usePiniaStore()
const route = useRoute()
const count = ref(1)
const loading = ref(true)
const data = ref({})

function increment() {
    count.value++
}
function decrement() {
    if (count.value > 1) {
        count.value--
    }
}

const fetchProducts = () => {
    loading.value = true
    axios.get(`https://66861ed583c983911b00e13f.mockapi.io/product/${route.params.id}`, {
    })
        .then(res => {
            data.value = res.data
        })
        .catch(err => {
            console.log('err', err);
        })
        .finally(() => {
            loading.value = false
        })
}

const isLiked = computed(() => {
    const index = store.likedProducts.findIndex(p => p.id == data.value.id)
    return index == -1
})

const isBasket = computed(() => {
    const index = store.basket.findIndex(p => p.id == data.value.id)
    if (index == -1) {
        store.addProductBasket(data.value, count.value)
    } else {
        alert("Bu mahsulot savatda mavjud!")
    }
})

fetchProducts()
</script>

<template>
    <div v-if="loading" class="text-3xl text-gray-500 text-center py-10">
        <Loading />
    </div>
    <div class="container">
        <div class="md:flex justify-between">
            <img class="w-[360px] h-[328px] md:w-[650px] md:h-[600px] border rounded" :src="data.image" alt="">
            <div class="w-[328px] md:w-[595px] h-[544px]">
                <h2 class="text-[28px] md:text-[40px] text-primary">{{ data.title }}</h2>
                <div class="flex justify-between items-center mt-[60px]">
                    <div>
                        <p class="text-[14px] text-[#B3B3B3]">Scott</p>
                        <p class="text-[14px] text-[#B3B3B3] mt-[10px]">Артикул : 7655-188</p>
                        <p class="text-[16px] text-[#4D932C] mt-[10px]">В наличии</p>
                    </div>
                    <div class="flex justify-between">
                        <img class="w-[22px] h-[21px] m-[5px]" src="../../public/socials.png" alt="">
                        <img class="w-[22px] h-[21px] m-[5px] " src="../../public/socials.png" alt="">
                        <img class="w-[22px] h-[21px] m-[5px]" src="../../public/socials.png" alt="">
                        <img class="w-[22px] h-[21px] m-[5px]" src="../../public/socials.png" alt="">
                        <img class="w-[22px] h-[21px] m-[5px]" src="../../public/socials.png" alt="">
                    </div>
                </div>
                <div class="w-[240px] md:w-[270px] flex justify-between items-center mt-[50px]">
                    <h1 class="text-[28px] md:text-[40px] text-[Inter] text-[#101010]">{{ data.newPrice }} ₽</h1>
                    <p class="text-[18px] md:text-[18px] text-[#B3B3B3] text-[Intro] line-through">{{ data.oldPrice }} ₽</p>
                </div>
                <div class="mt-[50px]">
                    <p class="text-[16px] text-[Inter] text-[#101010]">{{ data.description }}</p>
                </div>
                <div class="mt-[50px] w-[365px] md:w-[387px] h-[52px] flex justify-between items-center">
                    <div class="flex p-[16px] border justify-between w-[123px] rounded-[10px] text-[#101010]">
                        <button @click="decrement">-</button>
                        <p>{{ count }}</p>
                        <button @click="increment">+</button>
                    </div>
                    <div @click="isBasket" class="w-[180px] h-[52px]">
                        <button
                            class="w-[180px] pl-[30px] bg-primary pr-[30px] text-[#fff] rounded-[10px] pt-[16px] pb-[16px] text-[16px]">В
                            корзину</button>
                    </div>
                    <button class="w-[52px] h-[52px] rounded-[10px] bg-[#F8F8F8]" @click="store.addProductLiked(data)">
                        <h1 v-if="isLiked">🤍</h1>
                        <h1 v-else>❤</h1>
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-[100px] mb-[80px]">
            <h1 class="text-[40px] primary">
                Характеристика
            </h1>
            <div class="border rounded-[10px] mt-[20px]">
                <div>
                    <div class="w-full flex p-[20px] justify-between items-center h-[70px]">
                        <p>Цвет</p>
                        <p class="text-[#4C4C4C]">Жёлтый</p>
                    </div>
                </div>
                <div class="bg-[#F8F8F8]">
                    <div class="w-full p-[20px] flex justify-between items-center h-[70px]">
                        <p>Год</p>
                        <p class="text-[#4C4C4C]">2016</p>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-between items-center h-[70px] p-[20px]">
                        <p>Диаметр колеса</p>
                        <p class="text-[#4C4C4C]">24.7</p>
                    </div>
                </div>
                <div class="bg-[#F8F8F8]">
                    <div class="w-full flex justify-between items-center h-[70px] p-[20px]">
                        <p>Материал рамы</p>
                        <p class="text-[#4C4C4C]">Карбон</p>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-between items-center h-[70px] p-[20px]">
                        <p>Размер</p>
                        <p class="text-[#4C4C4C]">L</p>
                    </div>
                </div>
                <div class="bg-[#F8F8F8]">
                    <div class="w-full flex justify-between items-center h-[70px] p-[20px]">
                        <p>Страна</p>
                        <p class="text-[#4C4C4C]">Швейцария</p>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-between items-center h-[70px] p-[20px]">
                        <p>Производитель</p>
                        <p class="text-[#4C4C4C]">Scott</p>
                    </div>
                </div>
                <div class="bg-[#F8F8F8]">
                    <div class="w-full flex justify-between items-center h-[210px] md:h-[70px] p-[20px]">
                        <p>Покрышки</p>
                        <p class="text-[#4C4C4C] w-[129px] md:w-[500px]">Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead
                            Tubeless Easy /
                            PaceStar compound</p>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-between items-center h-[220px] md:h-[70px] p-[20px]">
                        <p>Рама</p>
                        <p class="text-[#4C4C4C] w-[129px] md:w-[480px]">Scale Carbon / HMX-технология / технология IMP /
                            Коническая
                            рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                    </div>
                </div>
                <div class="bg-[#F8F8F8]">
                    <div class="w-full flex justify-between items-center h-[220px] md:h-[70px] p-[20px]">
                        <p>Подседельный Штырь</p>
                        <p class="text-[#4C4C4C] w-[129px] md:w-[500px]">Ritchey WCS 700 Series: Carbon Link FlexLogic /
                            31.6mm
                            900 Series: Carbon 2B SDS / 34.9mm</p>
                    </div>
                </div>
                <div>
                    <div class="w-full md:flex justify-between items-center h-[90px] md:h-[70px] p-[20px]">
                        <p>Седло</p>
                        <p class="text-[#4C4C4C]">Ritchey WCS Streem V3 Titanium rails</p>
                    </div>
                </div>
                <div class="bg-[#F8F8F8]">
                    <div class="w-full md:flex justify-between items-center h-[150px] md:h-[100px] p-[20px]">
                        <p>Вилка</p>
                        <p class="text-[#4C4C4C] w-full md:w-[500px]">Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm
                            QR axle /
                            коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>