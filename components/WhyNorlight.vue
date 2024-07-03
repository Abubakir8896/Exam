<template>
    <div>
        <div class="container">
            <div class="flex justify-between items-center">
                <h1 class="text-[#454545] text-[40px] mb-[20px]">Почему NORNLIGHT?</h1>
                <button class="pt-[10px] pb-[10px] pl-[35px] pr-[35px] border rounded-[100px] flex items-center justify-between">О компании <img src="../public/buttonimg.png" alt=""></button>
            </div>
            <div class="md:grid grid-cols-4 gap-5">
                <div v-for="x in 4">                    
                    <div class="w-[310px] h-full border rounded p-[26px]">
                        <img class="w-[80px] h-[80px] flex justify-end" src="../public/lyutra.png" alt="">
                        <p class="text-[Monrope] text-[20px] text-[#454545] mt-[100px]">Только проверенные бренды</p>
                        <p class="text-[Monrope] text-[16px] text-[#454545] mt-[10px]">Бренды, проверенные временем и качеством</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>