<script setup>
import axios from "axios";

const emit = defineEmits(["close"]);

const fullName = ref("");
const phone = ref("");

const closeModal = () => {
  emit("close");
};

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000", {
      fullName: fullName.value,
      phone: phone.value,
    });

    fullName.value = "";
    phone.value = "";

    closeModal();
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
  <div
    class="w-[800px] h-[534px] bg-primary/10 fixed top-0 z-10"
    @click="closeModal"
  ></div>
  <div class="container relative max-w-[800px] bg-white p-16 z-20 rounded-[25px]">
    <button class="absolute right-6 top-6 font-bold" @click="closeModal">
      X
    </button>
    <h1 class="text-6xl font-bold mb-14">
      Заполните,<br />
      и мы перезвоним
    </h1>
    <form class="flex flex-col" @submit.prevent="handleSubmit">
      <input
        v-model="fullName"
        class="border py-4 px-5 mb-3 text-[#000] rounded-full border-primary outline-none"
        type="text"  
        placeholder="ФИО"
      />
      <input
        v-model="phone"
        class="border py-4 px-5 text-[#000] rounded-full border-primary outline-none"
        type="tel"
        placeholder="Tелефон"
      />
      <button
        type="submit"
        class="border mt-7 py-4 bg-primary text-white rounded-full"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
