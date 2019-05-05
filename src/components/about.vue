<template>
  <div class="about" ref="about">
    <boxmy>
      <div class="content" slot="content">
        <titlemy :title="title" class="titlemy"></titlemy>
        <p class="info" v-for="item of infos" :key="item">{{item}}</p>
      </div>
    </boxmy>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import boxmy from '@/components/boxmy';
import titlemy from '@/components/titlemy';

export default {
  name: 'about',
  components: {
    boxmy,
    titlemy,
  },
  data() {
    return {      
      title: {
        en: 'About Us',
        name: '关于我们',
        color: '#fff',
      },
      infos: [
        '"跟对人平台是国内领先的猎企CEO社群和资源共享科技平台。平台以引荐制为基础，以猎企为中心，为全国猎企合作伙伴打造高效的猎头服务联合打单系统、多元业务合作体系、以及培训赋能体系。',

        '跟对人平台强大的联合打单运营系统，助力猎企做大做强猎头主业；人力资源成本优化、残保金、员工拓展团建、RPO、劳务派遣等多元业务的合作开展，协助猎企实现资源的价值变现和增量发展；同时，为平台猎企提供体系化培训服务，赋能猎企持续成长，以创造更大的价值。',

        '跟对人平台（前身内聘网）自2014年成立以来，共获得知名机构（包括老鹰基金、清控科创等）投资数千万元，依托强大的产品运营和资本资源，已为中国数百家猎企及数千企业客户提供深度服务，并将持续不断的为中国人力资源企业提供高质量的服务。"',
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
    ...mapMutations(['m_aboutHeight','m_aboutOffsetTop']),
    handleValue(){
         setTimeout(()=>{
          this.m_aboutHeight({ aboutHeight: this.$refs.about.clientHeight });
          this.m_aboutOffsetTop({aboutOffsetTop: this.$refs.about.offsetTop});
      },1)
    }
  },
  mounted() {
     this.handleValue();
    
  },
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: px2rem(480);
  background: url("../assets/images/about.png");
  background-size: cover;
  margin-top: px2rem(30);
  .content {

    .info {
      font-size: px2rem(16);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(28);
      letter-spacing: 0px;
      color: #ffffff;
      text-align: center;
      margin-bottom: px2rem(45);
margin-top: px2rem(-20);

    }
  }
}
</style>

