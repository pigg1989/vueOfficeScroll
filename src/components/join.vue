<template>
  <div class="join" ref="join">
    <!-- <div class="bottom">
      <boxmy>
        <div class="content" slot="content">
          <h3 class="bottom_title">加入联盟，更多猎企分享互助平台</h3>
          <div class="button">申请加入联盟</div>
        </div>
      </boxmy>
    </div>-->

    <div class="form">
      <boxmy>
        <div class="content" slot="content">
          <div class="tit_box" slot="content">
            <titlemy :title="title"/>
            <p class="sub_title">{{subTitle}}</p>
          </div>
          <div class="form_box">
            <div class="header">
              <h3 class="title">填写加入联盟申请</h3>
              <p class="header_info">请填写您的真实信息，审核通过后，我们会在1个工作日之内联系您</p>
            </div>
            <div class="fb_left">
              <div class="input_box" v-for="item of inputsLeft" :key="item.name">
                <div v-if="item.name === '引荐人'">
                  <div v-if="isKnow">
                    <span class="nessary">*</span>
                    <label for="name" :class="['name',item.type==='radio'?'radio':'']">{{item.name}}</label>
                    <input
                      :type="item.type"
                      :placeholder="item.placeholder"
                      :class="['input']"
                      v-model="user[`${item.model}`]"
                    >
                  </div>
                </div>
                <div v-else>
                  <span class="nessary" :class="[item.type==='radio'?'nessary_radio':'']">*</span>
                  <label for="name" :class="['name',item.type==='radio'?'radio':'']">
                      {{item.name}}
                  </label>
                  <input
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :class="['input']"
                    v-if="item.type==='text'"
                    v-model="user[`${item.model}`]"
                    :disabled="item.disabled"
                  >
                  <div v-else :class="['radio_div']">
                      <div   v-for="(i,ii) of item.radios"
                            :key="i">
                           <input
                            type="radio"
                            name="is"
                            v-model="isKnow"
                            checked
                          
                            :class="[`rd_${ii}`]"
                            @change="handleRadio()"
                            :value="i==='是'?true:false"
                            >
                            {{i}}
                   
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="fb_left">
              <div class="input_box" v-for="item of inputsRight" :key="item.name">
                <span class="nessary">*</span>
                <label for="name" :class="['name',item.type==='radio'?'radio':'']">{{item.name}}
                   
                </label>
                <input
                  :type="item.type"
                  :placeholder="item.placeholder"
                  class="input"
                  v-model="user[`${item.model}`]"
                >
              </div>
            </div>
            <div class="form_button">
              <!-- <div class="cancel button">取消</div> -->
              <div class="submit button" @click="handleSubmit()">提交</div>
            </div>
          </div>
        </div>
      </boxmy>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="30%" class="dialog">
      <i class="iconfont icon-shenqingchenggong icon"></i>
      <h3 class="title">申请已提交</h3>
      <p class="info">工作人员将会在1个工作日内与您联系</p>
      <div class="button" @click="handleDone()">完成</div>
    </el-dialog>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { Message, Alert } from "element-ui";
import boxmy from "./boxmy";
import titlemy from "./titlemy";
import joinApi from "@/api/join";

export default {
  name: "join",
  components: {
    boxmy,
    titlemy
  },
  data() {
    return {
      dialogVisible: false,
      title: {
        en: "Join Us",
        name: "加入联盟",
        color: "#fff"
      },
      subTitle: "更多猎企分享互助平台",
      isKnow: true,
      user: {
        chinese_name: "",
        city: "",
        company_post: "",
        recommender_name: "",
        contact_information: "",
        company_name: ""
      },
      inputsLeft: [
        {
          name: "姓名",
          type: "text",
          placeholder: "请输入用户名",
          model: "chinese_name",
          disabled: false
        },
        {
          name: "城市",
          type: "text",
          placeholder: "请输入您的城市",
          model: "city",
          disabled: false
        },
        {
          name: "职务",
          type: "text",
          placeholder: "请输入您的职务",
          model: "company_post",
          disabled: false
        },
        {
          name: "是否认识平台合伙人",
          type: "radio",
          radios: ["是", "否"],
          model: "isKnow",
          disabled: false
        },
        {
          name: "引荐人",
          type: "text",
          placeholder: "请输入您的引荐人",
          model: "recommender_name",
          disabled: false
        }
      ],
      inputsRight: [
        {
          name: "电话",
          type: "number",
          placeholder: "请输入您的电话",
          model: "contact_information",
          disabled: false
        },
        {
          name: "公司名称",
          type: "text",
          placeholder: "请输入您的公司名称",
          model: "company_name",
          disabled: false
        }
      ]
    };
  },
  create() {},
  computed: {
    ...mapState(["showJoin"])
  },
  watch: {
    showJoin(n, o) {
      if (n) {
        setTimeout(() => {
          this.m_joinHeight({ joinHeight: this.$refs.join.clientHeight });
          this.m_joinOffsetTop({ joinOffsetTop: this.$refs.join.offsetTop });
          console.log(
            "join height",
            this.$refs.join.clientHeight,
            "join offsetTop",
            this.$refs.join.offsetTop
          );
        }, 1);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.m_joinHeight({ joinHeight: this.$refs.join.clientHeight });
      this.m_joinOffsetTop({ joinOffsetTop: this.$refs.join.offsetTop });
      console.log(
        "join height",
        this.$refs.join.clientHeight,
        "join offsetTop",
        this.$refs.join.offsetTop
      );
    }, 1);
  },
  methods: {
    ...mapMutations(["m_joinHeight", "m_joinOffsetTop", "m_showJoin"]),
    handleSubmit() {
      console.log("isKnow", this.isKnow);
      for (const i in this.user) {
        if (this.isKnow) {
          if (!this.user[i]) {
            Message({
              type: "error",
              message: "*为必填项"
            });
            return false;
          }
        } else if (i !== "recommender_name") {
          if (!this.user[i]) {
            Message({
              type: "error",
              message: "*为必填项"
            });
            return false;
          }
        }
      }
      console.log(this.user);
      joinApi.postJoinData(this.user).then(res => {
        console.log(res);
        if (res.data.code === "0") {
          this.dialogVisible = true;
        } else if (res.data.code === "2") {
          Message({
            type: "warning",
            message: "电话已存在"
          });
          this.dialogVisible = false;
        } else {
          this.dialogVisible = false;
        }
        console.log("dialogVisable", this.dialogVisible);
      });
    },
    handleRadio() {
      console.log(this.isKnow);
      if (!this.isKnow) {
        this.inputsLeft[4].disabled = true;
        this.user.recommender_name = "";
      }
    },
    handleDone() {
      this.dialogVisible = !this.dialogVisible;
      this.m_showJoin({ showJoin: false });
    }
  }
};
</script>
<style lang="scss" scoped>
.join {
  width: 100%;

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
        line-height: px2rem(24);
        letter-spacing: 0px;
        color: #ffffff;
        padding: px2rem(15) px2rem(30);
        border: 1px solid #fff;
        position: absolute;
        bottom: 6%;
        left: 45%;
      }
    }
  }
  .form {
    width: 100%;
    height: px2rem(809);
    background-image: url("../assets/images/join_bg.png");
    .content {
      .tit_box {
        .sub_title {
          font-size: px2rem(22);
          font-weight: normal;
          font-stretch: normal;
          line-height: px2rem(24);
          letter-spacing: 0px;
          color: #ffffff;
          text-align: center;
          margin-bottom: px2rem(50);
        }
      }
      .form_box {
        width: px2rem(880);
        height: px2rem(497);
        background: #fff;
        margin: 0 auto;
        .header {
          margin-left: px2rem(38);
          margin-top: px2rem(34);
          margin-bottom: px2rem(43);
          .title {
            font-size: px2rem(18);
            line-height: px2rem(24);
            margin-bottom: px2rem(15);
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #02c1ff;
          }
          .header_info {
            font-size: px2rem(14);
            line-height: px2rem(24);
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #666666;
          }
        }

        .fb_left {
          width: 50%;
          padding-left: px2rem(20);

          float: left;

          .input_box {
            margin-bottom: px2rem(20);
            .nessary {
              color: #f00;
              line-height: px2rem(14);
              vertical-align: text-top;
              &.nessary_radio{
                  float: left;
                  width: 5%;
              }
            }
            .name {
              font-size: px2rem(14);
              line-height: px2rem(24);
              font-weight: normal;
              letter-spacing: 0px;
              color: #666666;
              display: inline-block;
              width: 16%;
            /*  white-space: normal;
            word-wrap: break-word;
            word-break: break-all; */
            white-space: nowrap;
            word-wrap: normal;
            word-break: keep-all;
            text-overflow: ellipsis;
              &.radio {
                width: 35%;
                float: left;
               
              }
            }
            .input {
              width: 60%;
              height: px2rem(40);
              border-radius: 4px;
              border: solid 1px #cccccc;
              &.disabled {
                background: #cccccc;
              }
            }
            .radio_div {
              float: left;             
              width: 50%;             
              div{
                  float: left;
                  width: 45%;
                  text-align: center;
                 
              }
              
            }
          }
          &:nth-child(3) {
            .name {
              width: 20%;
            }
          }
        }
        .form_button {
          clear: both;
          .button {
            width: px2rem(82);
            height: px2rem(40);
            border-radius: 4px;

            font-size: px2rem(14);
            line-height: px2rem(40);
            float: right;
            text-align: center;
            margin-right: px2rem(20);
            &.cancel {
              border: solid 1px #999999;
              color: #666666;
            }
            &.submit {
              background: #02c1ff;
              border: 1px solid #02c1ff;
              color: #ffffff;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  .msg {
    width: 100%;
    height: px2rem(190);
    background: #343232;
  }
  .dialog {
    text-align: center;
    .icon {
      //   width: px2rem(76);
      //   height: px2rem(76);
      font-size: px2rem(76);
      line-height: px2rem(76);
      color: #26d38c;
    }
    .title {
      font-size: px2rem(24);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(30);
      letter-spacing: 0px;
      color: #333333;
      text-align: center;
      margin-bottom: px2rem(16);
      margin-top: px2rem(30);
    }
    .info {
      font-size: px2rem(18);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(20);
      letter-spacing: 0px;
      color: #484848;
      text-align: center;
      margin-bottom: px2rem(50);
    }
    .button {
      width: px2rem(206);
      height: px2rem(36);
      background-color: #26d38c;
      border-radius: 4px;
      color: #fff;
      text-align: center;
      line-height: px2rem(36);
      margin: 0 auto;
    }
  }
}
</style>

<style lang="scss">
.el-dialog {
  .el-dialog__header {
    display: none;
  }
}
</style>
