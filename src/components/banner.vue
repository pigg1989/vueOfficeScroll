<template>
    <div class="banner" ref="banner">
        <boxmy>
            <div class="content" slot="content">
                <h2 class="title">跟对人</h2>
                <p class="info">让对的人在一起创造未来</p>
                <img src="donwArrow" alt="">
            </div>
        </boxmy>
    </div>
</template>
<script>


import { mapMutations, mapState } from 'vuex';
import { setTimeout } from 'timers';
import boxmy from './boxmy';

export default {
  name: 'banner',
  components: {
    boxmy,
  },
  data() {
    return {
      downArrow: '',
    };
  },
  computed: {
    ...mapState(['bannerHeight']),
  },
  methods: {
    ...mapMutations(['m_bannerHeight']),
  },
  mounted() {
    setTimeout(() => {
      this.m_bannerHeight({ bannerHeight: this.$refs.banner.clientHeight - 80 });
      console.log('bannerHeight', this.$refs.banner.clientHeight, this.bannerHeight);
    }, 1);
  },
};
</script>
<style lang="scss">
    .banner {
        width: 100%;
        height: px2rem(526);
        background: url('../assets/images/banner.png');
        background-size: cover;
        .content{
            width: px2rem(655);
            height: px2rem(182);
            margin: 0 auto;
            margin-top: px2rem(154);

            .title{
                font-size: px2rem(88);
                line-height: px2rem(100);
                text-align: center;
                color: rgb(2,193,255);
            }
            .info{
                font-size:px2rem(58);
                line-height: px2rem(100);
                text-align: center;
                color: #fff;
            }
        }
    }
</style>
