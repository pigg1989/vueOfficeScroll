<template>
  <div class="cooperate" ref="cooperate">
    <boxmy>
      <div class="content" slot="content">
        <titlemy :title="title"></titlemy>
        <ul class="partners">
            <li v-for="item of partners" :key="item.img" class="li" :style="{backgroundImage:`url(${item.img})`}">

            </li>
        </ul>
      </div>
    </boxmy>
  </div>
</template>
<script>
import boxmy from './boxmy';
import titlemy from './titlemy';
import { mapMutations } from 'vuex';

export default {
  name: 'cooperate',
  components: {
    boxmy,
    titlemy,
  },
  data() {
    return {
      title: {
        en: 'Parteners',
        name: '合作客户',
        color: '#333',
      },
      partners: [
        {
          img: require('@/assets/images/tencent.png'),
        },
        {
          img: require('@/assets/images/alibaba.png'),
        },
        {
          img: require('@/assets/images/toutiao.png'),
        },
        {
          img: require('@/assets/images/uc.png'),
        },
        {
          img: require('@/assets/images/58.png'),
        },
        {
          img: require('@/assets/images/huawei.png'),
        },
        {
          img: require('@/assets/images/haoweilai.png'),
        },
        {
          img: require('@/assets/images/youku.png'),
        },
        {
          img: require('@/assets/images/xiaohongshu.png'),
        },
        {
          img: require('@/assets/images/vipkid.png'),
        },
        {
          img: require('@/assets/images/tantan.png'),
        },
        {
          img: require('@/assets/images/yuhui.png'),
        },
        {
          img: require('@/assets/images/lehu.png'),
        },
        {
          img: require('@/assets/images/media.png'),
        },
        {
          img: require('@/assets/images/babytree.png'),
        },
        {
          img: require('@/assets/images/aoqiwei.png'),
        },
        {
          img: require('@/assets/images/xiaoyu.png'),
        },
        {
          img: require('@/assets/images/yongyou.png'),
        },
        {
          img: require('@/assets/images/changjietong.png'),
        },
        {
          img: require('@/assets/images/jiayi.png'),
        },
        {
          img: require('@/assets/images/youzu.png'),
        },
        {
          img: require('@/assets/images/guazi.png'),
        },
        {
          img: require('@/assets/images/youxin.png'),
        },
        {
          img: require('@/assets/images/jiao.png'),
        },
        {
          img: require('@/assets/images/lianjia.png'),
        },
      ],
    };
  },
  props:{
      scrollTopmy:{
          type: Number,
          default: 0
      }
  },
  watch:{
      scrollTopmy(){
          this.handleValue();
      }
  },
  methods: {
    ...mapMutations(['m_cooperateHeight','m_cooperateOffsetTop']),
    handleValue(){
        setTimeout(() => {
      this.m_cooperateHeight({ cooperateHeight: this.$refs.cooperate.clientHeight });
      this.m_cooperateOffsetTop({cooperateOffsetTop: this.$refs.cooperate.offsetTop})
    }, 1);
    }
  },
  mounted() {
    this.handleValue();
  },
};
</script>
<style lang="scss" scoped>
.cooperate {
  .content {
      .partners{
          .li{
              float: left;
              width: px2rem(200);
              height: px2rem(80);
              background-repeat: no-repeat;
              background-position: center;
              background-size: 50%;
              &:nth-child(13){
                  background-size: 26%;
              }
              &:nth-child(17){
                  background-size: 26%;
              }
              &:nth-child(22){
                  background-size: 26%;
              }

          }
      }
  }
}
</style>
