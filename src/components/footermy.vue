<template>
  <div class="footermy">
    <boxmy>
      <div class="content" slot="content">
        <div class="left">
          <i class="iconfont icon-dibulogo"></i>
          <div class="line"></div>
          <div class="info">
            <p>地址：北京市朝阳区北苑路天畅园2号楼</p>
            <p>邮箱：leo.song@genduiren.cn</p>
            <p>电话：137-1870-6016</p>
          </div>
        </div>
        <div class="right">
          <div class="r_1">
            <p>咨询电话</p>
            <p>400-626-3578</p>
          </div>
          <div class="r_2">
            <div class="wechat">
                <img :src="wechat">
            </div>
            
            <p>关注公众号</p>
            <p>获取更多消息</p>
          </div>
        </div>
      </div>
    </boxmy>
  </div>
</template>
<script>
import boxmy from "./boxmy";
export default {
  name: "footermy",
  components: {
    boxmy
  },
  data() {
    return {
      wechat: require("@/assets/images/wechat.png")
    };
  },
  create() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.footermy {
  width: 100%;
  height: px2rem(182);
  background-color: #343232;
  .content {
    .left {
      float: left;
      width: 60%;
       margin-top: px2rem(20);
       padding-top: px2rem(20);
      .iconfont {
        font-size: px2rem(119);
        height: px2rem(119);
        line-height: px2rem(80);
        color: #fff;
       
        float: left;
      }
      .line {
        width: 1px;
        height: px2rem(110);
        background: #fff;
        float: left;
        margin-top: px2rem(-10)
      }
      .info {
         
         
        p {
          font-family: "FZLTHK--GBK1-0";
          font-size: px2rem(12);
          font-weight: normal;
          font-stretch: normal;
          line-height: px2rem(30);
          letter-spacing: 0px;
          color: #cccccc;
          text-indent: px2rem(20);
        }
      }
    }
    .right {
      float: right;
      width: 40%;    
      .r_1{
          float:left;
          width: px2rem(220);
          height: px2rem(57);
         
           margin-top: px2rem(43);
          p{            
            letter-spacing: 0px;
            color: #e7e7e7;
            text-align: left;
           
            &:nth-child(1){
                font-size: px2rem(18);
                font-weight: normal;
                font-stretch: normal;
                line-height: px2rem(20);
            }
            &:nth-child(2){
                font-size: px2rem(30);
                line-height: px2rem(40);
            }
          }
      }
      .r_2{
         
          float: right;
          margin-top: px2rem(13);
          .wechat{
              width: px2rem(80);
              height: px2rem(80);
              background: #fff;
              margin: 0 auto;
              margin-bottom: px2rem(10);
              img{
              display: block;              
              // margin: 10% auto;
              width: 100%;
              margin-bottom: px2rem(10);
              }
            }
          p{
            font-size: px2rem(12);
            font-weight: normal;
            font-stretch: normal;
            line-height: px2rem(24);
            letter-spacing: 0px;
            color: #cccccc;
            text-align: center;
          }
      }
    }
  }
}
</style>