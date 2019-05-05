

<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">
        <banner/>
    </swiper-slide>
   <swiper-slide class="swiper-item">
        <banner/>
    </swiper-slide><swiper-slide class="swiper-item">
        <banner/>
    </swiper-slide><swiper-slide class="swiper-item">
        <banner/>
    </swiper-slide><swiper-slide class="swiper-item">
        <banner/>
    </swiper-slide><swiper-slide class="swiper-item">
        <banner/>
    </swiper-slide>
    <swiper-slide class="swiper-item">Slide 4</swiper-slide>
    <swiper-slide class="swiper-item">Slide 5</swiper-slide>
    <swiper-slide class="swiper-item">Slide 6</swiper-slide>
    <swiper-slide class="swiper-item">Slide 7</swiper-slide>
    <swiper-slide class="swiper-item">Slide 8</swiper-slide>
    <swiper-slide class="swiper-item">Slide 9</swiper-slide>
    <swiper-slide class="swiper-item">Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import banner from '@/components/banner';
import vocational from '@/components/vocational';

export default {
  components: {
    banner, vocational,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',

        mousewheel: true,
        //   height: 300,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },

};
</script>

<style lang="scss">

  .swiper-box {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    border: 10px solid yellow;
  }
  .swiper-item {
    border: 10px solid #0f0;

    text-align: center;
    font-size: 18px ;
    background: #fff;

  }
</style>

