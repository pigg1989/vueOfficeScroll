<template>
  <div class="fixRight">
    <div class="left" v-show="showLeft" @mouseover="handleOver()" @mouseleave="handleLeave()">
      <div class="up">
        <p>咨询热线</p>
        <p></p>
        <p>400-626-3578</p>
      </div>
      <div class="down">
        <p>业务合作</p>
        <p>137-1870-6016</p>
      </div>
    </div>
    <div class="right">
      <div class="lianxi" @mouseover="handleOver()" @mouseleave="handleLeave()">
        <i class="iconfont icon-lianxiwomen icon"></i>
        <p class="title">联系我们</p>
      </div>
      <!-- <div class="jiaru">
        <i class="iconfont icon-jiarulianmeng icon"></i>
        <p class="title">加入联盟</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "fixRight",
  components: {},
  data() {
    return {
        showLeft: false
    };
  },
  create() {},
  mounted() {},
  methods: {
      handleOver(){
          this.showLeft = true;
      },
      handleLeave(){
          this.showLeft = false;
      }
  }
};
</script>
<style lang="scss" scoped>
.fixRight {
  position: fixed;
  top: 45%;
  right: 1%;
  .left {
    float: left;
    width: px2rem(200);
    height: px2rem(192);
    background-color: #ffffff;
    box-shadow: 0px 3px 7px 0px rgba(35, 35, 35, 0.12);
    margin-right:px2rem(10);
    .up{
          margin: px2rem(22) 0 px2rem(37) 0;
      }
    p {
      font-size: px2rem(18);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(30);
      letter-spacing: 0px;
      color: #484848;
      text-align: center;
      
    }
  }
  .right{
      float:right;
    .icon{
        font-size: px2rem(28);
        

    }
     .title{
            margin-top: px2rem(10);
            font-size: px2rem(12);
            line-height: px2rem(28);
        }
    .lianxi{
        padding: px2rem(20);
        text-align: center;
        background-color: #343232;
        color: #fff;
        margin-bottom: px2rem(5);
    }
    .jiaru{
        padding: px2rem(20);
        text-align: center;
        background-color: #02c1ff;
        color: #fff;
       
    }

  }
}
</style>