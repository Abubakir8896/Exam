<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <div class="slide flex justify-between items-center mt-5 mb-20">
    <div class="w-[1450px] mx-auto lg:h-[550px] h-[450px]">
      <swiper
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper object-cover"
      >
        <swiper-slide v-for="item in 8" data-hash="slide1" class="">
          <div
            class="flex max-md:flex-col-reverse items-center container justify-between md:h-[500px] h-[577px]"
          >
            <div class="text-left w-full mb-5">
              <h1
                class="title text-primary md:text-6xl text-3xl font-bold max-md:w-[257px] w-[450px] text-left mb-9"
              >
                Скидка 15% на все подвесные светильники <br />
                <span
                  class="bg-primary text-white rounded-full md:px-5 md:py-3 px-3 py-0.5"
                >
                  до 5 февраля</span
                >
              </h1>
            </div>

            <img
              class="md:-mt-12 max-md:mb-6"
              :src="'/intro_img.png' ? '/intro_img.png' : '/intro_mobile.svg'"
              alt=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
h1.title {
  line-height: 87.42px;
}
.swiper {
  width: 100%;
}

.slide {
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #f2f2f2;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .slide {
    width: 100%;
  }
  h1.title {
    line-height: 38.25px;
  }
}
</style>
