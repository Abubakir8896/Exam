<template>
    <div>
        <div class="container">
            <div class="flex justify-between items-center">
                <h1 class="text-[#454545] text-[40px] mb-[20px]">Каталог</h1>
                <button
                    class="flex items-center pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px]">Весь
                    каталог <img class="w-[14px] h-[10px] ml-[6px]" src="../public/next.webp" alt=""></button>
            </div>
            <div class="md:grid grid-cols-3 gap-5">
                <div v-for="x in 6">
                    <div class="w-[420px] h-[250px] py-4 bg-[#F2F2F2] rounded-[20px] p-[26px]">
                        <div class="flex justify-between">
                            <div class="justify-between">
                                <p class="text-[Monrope] text-[20px] text-[#454545]">Люстры</p>
                            </div>
                            <div class="flex justify-end">
                                <img class="w-[180px] h-[206px] top-8" src="../public/lyustra.png" alt="">
                            </div>
                        </div>
                        <div class="flex w-[90px] justify-around items-center">
                            <p>От 540₽ </p>
                            <img class="w-[18px] h-[15px]" src="../public/next.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>