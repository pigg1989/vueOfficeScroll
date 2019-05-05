<template>
  <div class="navbar">
    <boxmy>
      <div class="content" slot="content">
        <i class="iconfont icon-shiliangzhinengduixiang logo"></i>
        <ul class="ul">
          <li
            v-for="item of navs"
            :key="item.name"
            :class="['li',item.select?'select':'']"
            @click="handleClick(item.activeIndex)"
          >
            <!-- <a :href="'#'+item.activeIndex">{{item.name}}</a> -->
            {{item.name}}
          </li>
        </ul>
        <div class="buttons">
          <div class="button login" @click="gotoLogin()">登录</div>
          <div class="button join" @click="handleClick(5)">加入联盟</div>
        </div>
      </div>
    </boxmy>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import boxmy from "./boxmy";
import { setTimeout } from "timers";

export default {
  name: "navbar",
  props: {
    aIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    boxmy
  },
  data() {
    return {
      navs: [
        {
          name: "业务介绍",
          select: false,
          activeIndex: 1
        },
        {
          name: "关于我们",
          select: false,
          activeIndex: 2
        },
        {
          name: "合作客户",
          select: false,
          activeIndex: 3
        },
        {
          name: "联系我们",
          select: false,
          activeIndex: 4
        },
        /* {
          name: "加入联盟",
          select: false,
          activeIndex: 5
        } */
      ]
    };
  },
  computed: {
    ...mapState([
      "showJoin",
      "bannerHeight",
      "vocationalHeight",
      "aboutHeight",
      "cooperateHeight",
      "contactHeight",
      "joinHeight",
      "appHeight",
      "joinOffsetTop",
      "vocationalOffsetTop",
      "aboutOffsetTop",
      "cooperateOffsetTop",
      "contactOffsetTop",
      "appHeight"
    ])
  },
  watch: {
    aIndex(n, o) {
      console.log("activeIndex", n, o);
      this.navs.forEach(item => {
        if (item.activeIndex === n) {
          item.select = true;
        } else {
          item.select = false;
        }
      });
    }
  },
  methods: {
    ...mapMutations(["m_editingActiveIndex", "m_showJoin", "m_scrollTop","m_vocationalOffsetTop","m_aboutOffsetTop","m_cooperateOffsetTop","m_contactOffsetTop"]),
    handleClick(index) {
    //   this.m_editingActiveIndex({ activeIndex: index });
    
    let n = document.documentElement.scrollTop;
    let maxScrollTop = document.documentElement.scrollTop - window.innerHeight;
    switch(index){
        case 1:
            // this.m_vocationalOffsetTop({vocationalOffsetTop:n});
            document.documentElement.scrollTop = this.vocationalOffsetTop;
        break;
        case 2: 
            // this.m_aboutOffsetTop({aboutOffsetTop:n});
            document.documentElement.scrollTop = this.aboutOffsetTop;
        break;
        case 3:
            // this.m_cooperateOffsetTop({cooperateOffsetTop:n});
            document.documentElement.scrollTop = this.cooperateOffsetTop;
        break;
        case 4:
            // this.m_contactOffsetTop({contactOffsetTop:n});
            document.documentElement.scrollTop = this.contactOffsetTop;
        break;
        case 5:
        if(this.showJoin){
            document.documentElement.scrollTop = this.appHeight - window.innerHeight;
        }else{
            this.m_showJoin({ showJoin: true });
        }
            
        break;
    }
      console.log(index,'获取document.documentElement.scrollTop',window.document.documentElement.scrollTop);
      this.navs.forEach(item => {
        if (item.activeIndex === index) {
          item.select = true;
        } else {
          item.select = false;
        }
      });
     
    },
    gotoLogin() {
      window.location.href = "http://fighting.genduiren.cn/";
    }
  }
};
</script>
<style lang="scss">
.navbar {
  width: 100%;
  height: px2rem(50);
  background: $navbarBgColor;
  .content {
    .logo {
      font-size: px2rem(28);
      line-height: px2rem(50);
      color: rgb(2, 193, 255);
      float: left;
      margin-left: px2rem(10);
    }
    .ul {
      float: left;
      margin-left: px2rem(120);
      .li {
        float: left;
        color: #fff;
        line-height: px2rem(50);
        margin-right: px2rem(40);
        a {
          color: #fff;
          text-decoration: none;
        }
        &.select {
            color: #02c1ff;
          a {
            color: #02c1ff;
            text-decoration: none;
          }
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    .buttons {
      margin-top: px2rem(10);
     float: right;
      .button {
        font-size: px2rem(14);
        font-weight: normal;
        font-stretch: normal;
        line-height: px2rem(30);
        letter-spacing: 0px;
        color: #ffffff;
        border: 1px solid #fff;
        float: left;
        margin-left: px2rem(20);
        border-radius: px2rem(15);
        text-align: center;
        &:hover {
          cursor: pointer;
        }
        &.join {
          width: px2rem(96);
          height: px2rem(30);
          background-image: linear-gradient(-90deg, #0297ff 0%, #26caff 100%);
          border: none;
        }
        &.login {
          width: px2rem(76);
          height: px2rem(30);

          border: solid 1px #ffffff;
        }
      }
    }
  }
}
</style>
