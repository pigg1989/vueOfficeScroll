<template>
  <div class="contact" ref="contact">
    <boxmy>
      <div class="content" slot="content">
        <titlemy :title="title"/>
        <h3 class="sub_title">{{subTitle}}</h3>
        <div class="con">
          <div class="pane" v-for="item of contacts" :key="item.icon">
            <i :class="item.icon" class="icon"></i>
            <p class="info" v-for="i of item.infos" :key="i">{{i}}</p>
          </div>
        </div>
      </div>
    </boxmy>
    <div class="bottom">
      <boxmy>
        <div class="content" slot="content">
          <h3 class="bottom_title">加入联盟，更多猎企分享互助平台</h3>
          <div class="button" @click="handleClick()">申请加入联盟</div>
        </div>
      </boxmy>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import boxmy from './boxmy';
import titlemy from './titlemy';

export default {
  name: 'contact',
  components: {
    boxmy,
    titlemy,
  },
  data() {
    return {
      subTitle: '更多业务合作请致电',
      title: {
        en: 'Contact Us',
        name: '联系我们',
        color: '#333',
      },
      contacts: [
        {
          icon: 'iconfont icon-dizhi',
          infos: ['地址：北京市朝阳区天畅园2号楼'],
        },
        {
          icon: 'iconfont icon-youxiang1',
          infos: ['邮箱：leo.song@genduiren.cn'],
        },
        {
          icon: 'iconfont icon-dianhua1',
          infos: ['TEL：13718706016', '联系人：Leo（发展总监）'],
        },
      ],
    };
  },
  props:{
      scrollTopmy:{
          type: Number,
          default:0
      }
  },
  watch:{
      scrollTopmy(){
          this.handleValue();
      }
  },
  computed: {
    ...mapState(['showJoin', 'scrollTop', 'cooperateHeight', 'appHeight', 'contactHeight', 'joinHeight','joinOffsetTop']),
  },
  create() {},
  mounted() {
     
    this.handleValue();
  },
  methods: {
    ...mapMutations(['m_showJoin', 'm_editingActiveIndex', 'm_contactHeight', 'm_scrollTop','m_contactOffsetTop']),
    handleClick() {
        if(this.showJoin){
           
            document.documentElement.scrollTop = this.appHeight - window.innerHeight;
        }else{
            this.m_showJoin({ showJoin: true });
        }
     
    
    },
    handleValue(){
        setTimeout(() => {
      this.m_contactHeight({ contactHeight: this.$refs.contact.clientHeight });
      this.m_contactOffsetTop({contactOffsetTop: this.$refs.contact.offsetTop});
    }, 1);
    }
  },
};
</script>
<style lang="scss" scoped>
.contact {
    background-color: $modelBgColor;
  .content {
    .con {
      margin: px2rem(65) 0 px2rem(125) 0;
      .pane {
        width: 33%;
        height: auto;
        text-align: center;
        float: left;

        &:nth-last-child(1) {
          margin-right: 0;
        }
        .icon {
          display: block;
          font-size: px2rem(50);
          line-height: px2rem(82);
          width: px2rem(82);
          height: px2rem(82);
          margin: 0 auto;
          background-color: #17386c;
          color: #fff;
          border-radius: 50%;
          margin-bottom: px2rem(40);
        }
        .info {
          font-size: px2rem(16);
          line-height: px2rem(24);
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #333333;
        }
      }
    }
    .sub_title {
      font-size: px2rem(22);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(22);
      letter-spacing: 0px;
      color: #0297ff;
      text-align: center;
    }
  }
  .bottom {
    width: 100%;
    height: px2rem(210);
    background-image: url("../assets/images/contact_bottom.png");
    background-size: cover;
    .content {
      position: relative;
      height: px2rem(210);
      .bottom_title {
        font-family: "FZLTZCHK--GBK1-0";
        font-size: px2rem(48);
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
        text-align: center;
        width: px2rem(821);
        height: px2rem(130);
        line-height: px2rem(155);
        text-align: center;
        margin: 0 auto;
      }
      .button {
        font-size: px2rem(24);
        font-weight: normal;
        font-stretch: normal;
        line-height: px2rem(52);
        letter-spacing: 0px;
        color: #ffffff;
        // padding: px2rem(15) px2rem(30);
        border: 1px solid #fff;
        width: px2rem(200);
        height: px2rem(52);
        text-align: center;
        margin: 0 auto;
        &:hover{
            cursor: pointer;
        }
        
      }
    }
  }
}
</style>
