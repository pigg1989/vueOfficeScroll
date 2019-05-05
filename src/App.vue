<template>
  <div id="app" ref="app">
    <navbar class="navbar" :aIndex="aIndex"/>
    <banner  />
    <vocational :scrollTopmy="scrollTopmy"/>
    <about  :scrollTopmy="scrollTopmy"/>
    <cooperate :scrollTopmy="scrollTopmy"/>
    <contact :scrollTopmy="scrollTopmy"/>
    <join v-if="showJoin"/>
    <footermy/>
    <fixRight/>
    <!-- <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide class="swiper-item banner">
        <banner/>
      </swiper-slide>
      <swiper-slide class="swiper-item vocational">
        <vocational/>
      </swiper-slide>
      <swiper-slide class="swiper-item about">
        <about/>
      </swiper-slide>

      <swiper-slide class="swiper-item cooperate">
        <cooperate/>
      </swiper-slide>

      <swiper-slide class="swiper-item contact">
        <contact/>
      </swiper-slide>

      <swiper-slide class="swiper-item join" v-if="showJoin">
        <join/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>-->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import navbar from "@/components/navbar";
import banner from "@/components/banner";
import vocational from "@/components/vocational";
import about from "@/components/about";
import cooperate from "@/components/cooperate";
import contact from "@/components/contact";
import join from "@/components/join";
import fixRight from "@/components/fixRight";
import footermy from '@/components/footermy';
import test from "./test";
import { setTimeout } from "timers";

export default {
  name: "App",
  components: {
    navbar,
    banner,
    vocational,
    test,
    about,
    cooperate,
    contact,
    join,
    fixRight,
    footermy
  },
  data() {
    return {
      showFake: true,
       aIndex: 0,
       scrollTopmy: 0,
       maxScroll: 0,
    };
  },
  computed: {
    ...mapState([
      "activeIndex",
      "showJoin",
      "vocationalHeight",
      "aboutHeight",
      "bannerHeight",
      "cooperateHeight",
      "scrollTop",
      "appHeight",
      "vocationalOffsetTop",
      "aboutOffsetTop",
      "cooperateOffsetTop",
      "contactOffsetTop",
      "joinOffsetTop"
    ]),
   
  },
  watch: {
    scrollTop(n, o) {
      console.log(
        'watch scrollTop',
        n,
        o,
        "vocationalOffsetTop",
        this.vocationalOffsetTop,
        "aboutOffsetTop",
        this.aboutOffsetTop,
        "cooperateOffsetTop",
        this.cooperateOffsetTop,
        "contactOffsetTop",
        this.contactOffsetTop,
        "joinOffsetTop",
        this.joinOffsetTop,
        "maxScrollTop",this.$refs.app.clientHeight - window.innerHeight
      );
      
    },
    showJoin(n, o) {
      console.log("showjoin is", n);
      if(n){
           setTimeout(() => {
            this.m_appHeight({ appHeight: this.$refs.app.clientHeight });
            document.documentElement.scrollTop = this.appHeight - window.innerHeight;
          }, 1);
      }
    },   
  },
  methods: {
    ...mapMutations([
      "m_editingActiveIndex",
      "m_showJoin",
      "m_scrollTop",
      "m_appHeight",
      
    ]),

    handleScroll() {
      // console.log(this.scrollTop);
      setTimeout(()=>{
      // let n = this.scrollTopmy = document.documentElement.scrollTop;
      let n;
      if(window.pageYOffset){//这一条滤去了大部分， 只留了IE678
        n = window.pageYOffset
      }else if(document.documentElement.scrollTop ){//IE678 的非quirk模式
        n = document.documentElement.scrollTop
      }else if(document.body.scrolltop){//IE678 的quirk模式
        n = document.body.scrolltop
      }else{
        n = 0;
      }
       let maxScroll = 0;
      try{
       
        if(this.$refs.app.clientHeight){
           maxScroll = this.$refs.app.clientHeight- window.innerHeight;
        }else if(maxScroll>0){
          maxScroll = this.maxScroll;
        }
        
      }catch(error){
        console.log('error is',error);
      }
     if(maxScroll===0){
       return null;
     }
      console.log('n is ',n,'maxScroll is',maxScroll);
       console.log(
        "vocationalOffsetTop",
        this.vocationalOffsetTop,
        "aboutOffsetTop",
        this.aboutOffsetTop,
        "cooperateOffsetTop",
        this.cooperateOffsetTop,
        "contactOffsetTop",
        this.contactOffsetTop,
        "joinOffsetTop",
        this.joinOffsetTop,
      );
        if (n < this.vocationalOffsetTop) {
          // this.m_editingActiveIndex({ activeIndex: 0 });
          this.aIndex = 0;
          
        } else if (n >= this.vocationalOffsetTop && n < this.aboutOffsetTop) {
          // this.m_editingActiveIndex({ activeIndex: 1 });
          this.aIndex = 1;
          console.log('业务介绍')
        } else if (n >= this.aboutOffsetTop && n < this.cooperateOffsetTop) {
          // this.m_editingActiveIndex({ activeIndex: 2 });
          this.aIndex = 2;
          console.log('关于我们')
        } else if (n >= this.cooperateOffsetTop && n < (this.contactOffsetTop>= maxScroll?maxScroll:this.contactOffsetTop)) {
          // this.m_editingActiveIndex({ activeIndex: 3 });
          this.aIndex = 3;
          console.log('合作客户')
        } else if (n >= maxScroll ) {
          // this.m_editingActiveIndex({ activeIndex: 4 });
          console.log('shibushi suandao wole ');
          this.aIndex = 4;
          console.log('联系我们')
        } 
     
      },100)
     
    },
    handleResize(){
      window.location.reload();
    },
    handleValue(){
      this.m_editingActiveIndex({activeIndex: 0});
      setTimeout(() => {
      this.m_appHeight({ appHeight: this.$refs.app.clientHeight });
      document.documentElement.scrollTop = this.appHeight - window.innerHeight;
    }, 1);
    },
    init(){
      this.maxScroll = this.appHeight - window.innerHeight;
      this.m_editingActiveIndex({activeIndex: 0});
      document.documentElement.scrollTop = 0 ;
      this.m_appHeight({ appHeight: this.$refs.app.clientHeight });
      
    }
  },
  created(){
   
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // setTimeout(()=>{this.swiper.update()},10);
    window.addEventListener("scroll", this.handleScroll);
     window.addEventListener('beforeunload',()=>{
      console.log('你要刷新了......');
    });
    // window.addEventListener('resize',this.handleResize);
   this.init();
    console.log('document.documentElement.scrollTop',document.documentElement.scrollTop,'store ',this.activeIndex);
  }
};
</script>

<style lang="scss">
#app {
  * {
    overflow: hidden;
  }
  .navbar {
    height: px2rem(50);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
  }
  .swiper {
    margin-top: px2rem(50);

    .swiper-item {
     
    }
    .swiper-wrapper {
      // height: auto !important;
      // border: 10px solid #0f0;
    }
    .swiper-slide {
      overflow: auto !important;
    }

    .swiper-slide-active {
      overflow: auto !important;
      height: 100% !important;
    }
  }
}
</style>
