<template>
  <div class="vocational" ref="vocational">
    <boxmy>
      <div class="content" slot="content">
        <titlemy :title="title"/>
        <div class="tab">
          <div class="tb">
            <div
              :class="['tabBox',item.hover?'hover':'']"
              v-for="(item,index) of tabs"
              :key="index"
              @mousemove="changeHover(index)"
            >
              <i :class="['icon',item.icon]"></i>
              <h3 class="tabName">{{item.name}}</h3>
              <i class="tabLine icon-wechat"></i>
            </div>
          </div>
        </div>
      </div>
    </boxmy>
    <div class="tc">
      <boxmy>
        <div class="content" slot="content">
          <div class="tabContent" v-for="item of tabContents" :key="item.title" v-show="item.show">
            <h3 class="tcTitle">{{item.title}}</h3>
            <p class="tcInfo" v-for="i of item.tcInfos" :key="i">
              <span class="iconfont icon-lingxingkuai"></span>
              {{i}}
            </p>
            <div class="peixun" v-if="item.title==='培训业务'">
              <h3 class="tcTitle">{{item.pxTitle}}</h3>
              <img :src="item.teacherImage" alt class="teacher">
              <div class="right">
                <p class="teacherInfo" v-for="t of item.teacherInfos" :key="t">{{t}}</p>
              </div>
            </div>
            <div class="course" v-if="item.title==='培训业务'">
              <h3 class="ccTitle">{{item.courseTitle}}</h3>
              <div class="ct_cont" v-for="ct of item.cts" :key="ct.tit">
                <h4 class="ct_tit">
                  <span class="iconfont icon-lingxingkuai"></span>
                  {{ct.tit}}
                </h4>
                <p class="ct_info">{{ct.info}}</p>
              </div>
            </div>
          </div>
        </div>
      </boxmy>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import boxmy from "@/components/boxmy";
import titlemy from "@/components/titlemy";

export default {
  name: "vocational",
  data() {
    return {
      title: {
        en: "Business Introduced",
        name: "业务介绍",
        color: "#333333"
      },
      tabs: [
        {
          icon: "iconfont icon-lietouyewu",
          name: "猎头业务",
          hover: true
        },
        {
          icon: "iconfont icon-RPOyewu",
          name: "RPO业务",
          hover: false
        },
        {
          icon: "iconfont icon-laowupaiqian",
          name: "劳动派遣业务",
          hover: false
        },
        {
          icon: "iconfont icon-peixunyewu",
          name: "培训业务",
          hover: false
        },
        {
          icon: "iconfont icon-renliziyuanchengbenyouhua",
          name: "人力资源成本优化",
          hover: false
        },
        {
          icon: "iconfont icon-canjirenjiuyebaozhangjin",
          name: "残保人就业保障金",
          hover: false
        }
      ],
      tabContents: [
        {
          title: "猎头业务",
          tcInfos: [
            "致力于为各类型企业提供高端人才信息收集、寻访推荐、背景调查、能力测评等方面服务，解决企业在人才开发与储备战略中所遇到的瓶劲难题。在服务过程中，能根据企业特定的发展与经营战略，结合其管理理念及岗位需求，为其选择和推荐最合适的精英人才。",
            "支持客户精准、高效的获取中高级管理、专业技术人才。"
          ],
          show: true
        },
        {
          title: "RPO业务",
          tcInfos: [
            "帮助客户在短时间内，解决紧急、批量的人员招聘 ；",
            "由专注于行业研究的专家执行团队提供VIP专属服务；",
            "线上和线下相结合的服务模式,整合多种渠道资源，不断拓展行业内能触及的人才资源范围；",
            "根据客户需求量身打造的性价比最高的综合解决方案；",
            "项目制运作模式，为客户提供招聘全流程支持。"
          ],
          show: false
        },
        {
          title: "劳动派遣业务：",
          tcInfos: [
            "提供专业劳务派遣协议方案、代办录用、岗前培训及劳动合同签定、员工档案管理、代缴社会保险、员工薪资发放、专业人员后勤管理、不符合岗位要求员工及时更换、退工手续办理、代理劳务纠纷、定期企业回访及后期跟踪管理。",
            "劳务派遣，又称人才派遣、人才租赁、劳动派遣、劳动力租赁、雇员租赁，是指由劳务派遣机构与派遣劳工订立劳动合同，并支付报酬，把劳动者派向其他用工单位，再由其用工单位向派遣机构支付一笔服务费用的一种用工形式。劳动合同关系存在于派遣机构与派遣劳工之间，但劳动力给付的事实则发生于派遣劳工与要派企业之间。劳动派遣的最显著特征就是劳动力的雇用和使用分离。劳动派遣机构已经不同于职业介绍机构，它成为与劳动者签订劳动合同的一方当事人。",
            "劳务派遣，降低用人成本支出,人事管理更便捷专业,降低员工及用人单位劳动风险。"
          ],
          show: false
        },
        {
          title: "培训业务",
          //   tcInfos: [
          //     "提供专业劳务派遣协议方案、代办录用、岗前培训及劳动合同签定、员工档案管理、代缴社会保险、员工薪资发放、专业人员后勤管理、不符合岗位要求员工及时更换、退工手续办理、代理劳务纠纷、定期企业回访及后期跟踪管理。",
          //     "劳务派遣，又称人才派遣、人才租赁、劳动派遣、劳动力租赁、雇员租赁，是指由劳务派遣机构与派遣劳工订立劳动合同，并支付报酬，把劳动者派向其他用工单位，再由其用工单位向派遣机构支付一笔服务费用的一种用工形式。劳动合同关系存在于派遣机构与派遣劳工之间，但劳动力给付的事实则发生于派遣劳工与要派企业之间。劳动派遣的最显著特征就是劳动力的雇用和使用分离。劳动派遣机构已经不同于职业介绍机构，它成为与劳动者签订劳动合同的一方当事人。",
          //     "劳务派遣，降低用人成本支出,人事管理更便捷专业,降低员工及用人单位劳动风险。"
          //   ],
          tcInfos: [
            "跟对人“招聘大学”成立的初衷是赋能平台的猎企合伙人及其团队，并逐步贡献于整个猎头行业，和人力资源招聘领域。目前主要分四个学院：总裁学院、管理学院，顾问技能学院和顾问专业学院。首先，协助猎企CEO及高层管理者打造高效的猎企管理系统，从而实现：如何做强公司，获得可复制的有序成功，如何突破猎企的分裂魔咒，冲击更高产出，如何突破规模与人均产出无法兼得的瓶颈。。。再者，赋能猎企团队Leader的管理能力，从而实现：如何从个人冠军到团队冠军的转变，如何通过数据分析等管理动作赋能下属，如何打造一支超有凝聚力和战斗的业务团队。。。最后，赋能猎头顾问的专业和业务能力，从而实现：让更多的猎头从业者从“人才中介”转变为真正的咨询顾问，提升整个猎头行业的专业水平。跟对人“招聘大学”由猎企高层到顾问基层，由平台合伙人的点到猎头和招聘行业的面，用点滴行动去贡献我们的专业力量。"
          ],
          pxTitle: "校长介绍",
          teacherImage: require("@/assets/images/teacher.png"),
          teacherInfos: [
            "10年海外留学工作经历，10多年国内猎头行业经验，精通KA和PS两种模式的利弊与转型设计",
            "2010年加入RobertWalters，1年时间从顾问做到团队经理，作为核心成员将公司业绩从0做到2200万",
            "2012年加入LloydMorgan，1年后做到西南区业务总监并兼全国培训总监，实现公司业绩连续三年翻倍成长，2015年初达到近7000万。",
            "2015年专注猎企培训和咨询 ，协助猎企实现运营体系升级和落地。80%辅导的公司业绩在一年内提升50%以上，30%辅导的公司业绩在一年内提升超过100%。曾受邀百余场猎头行业的培训和分享，善于打造体系而高效的猎企管理系统，培训实操性及落地性强，务实而有启发性的授课风格。"
          ],
          courseTitle: "课程内容",
          cts: [
            {
              tit: "《总裁管理班》",
              info: "商业模式设计、团队发展体系、薪酬激励体系、管理运营体系"
            },
            {
              tit: "《团队管理篇》",
              info: "赋能新晋管理能力   助力高效团队管理"
            },
            {
              tit: "《顾问技能篇》",
              info: "L-0猎头入门篇、L-1高效交付篇、L-1.5流程把控篇、L-2客户BD篇"
            }
          ],

          show: false
        },
        {
          title: "人力资源成本优化介绍",
          tcInfos: [
            "随着营转增体系的完成，国家进一步推行金税三期，这些系统的全面推进，使得以前大部分公司从外部买发票抵成本，抵增值税，抵所得税的做法慢慢无法继续实行。",
            "我们主要打造互联网+组织轻型化服务平台，通过外包和成本优化设计，将企业的人工成本转化为了业务成本。同时，我们在税收洼地取得了相关政策，帮助客户提供一站式解决方案，合理节税。"
          ],
          show: false
        },
        {
          title: "残保金项目介绍",
          tcInfos: [
            "‘残保金’是残疾人就业保障金的简称。残保金是未按规定安排残疾人就业的机关、团体、企业、事业单位和民办非企业单位缴纳的资金，由用人单位所在地的地方政府部门负责征收。残疾人就业保障项目，作为全国首个残疾人互联网就业项目，主旨是“以培训促就业、以就业促增收”。以中国残疾人福利基金会为依托，目前已在银川、张掖、淄博、重庆、济南、石家庄、海南等地建成10座就业基地，培训就业残疾人达1000人。"
          ],
          show: false
        }
      ]
    };
  },
  props:{
      scrollTopmy: {
          type: Number,
          default: 0
      }
  },
  components: {
    boxmy,
    titlemy
  },
  computed: {
    ...mapState(["scrollTop"])
  },
  watch:{
      scrollTopmy(n,o){
          this.handleValue();
      }
  },
  methods: {
    ...mapMutations(["m_vocationalHeight", "m_vocationalOffsetTop"]),
    changeHover(i) {
      console.log("i is", i);
      this.tabContents.forEach((item, index) => {
        if (index === i) {
          item.show = true;          
        } else {
          item.show = false;
        }
      });
      this.tabs.forEach((item,index)=>{
          if(index === i){
              item.hover = true;
          }else{
              item.hover = false;
          }
      })
    },
    handleValue(){
         setTimeout(() => {
      this.m_vocationalHeight({
        vocationalHeight: this.$refs.vocational.clientHeight
      });
      this.m_vocationalOffsetTop({
        vocationalOffsetTop: this.$refs.vocational.offsetTop
      });
      console.log(
        this.$refs.vocational.clientHeight,
        "vocational.offsetTop",
        this.$refs.vocational.offsetTop
      );
    }, 1);
    }
  },
  mounted() {
   this.handleValue();
  }
};
</script>
<style lang="scss">
.vocational {
  width: 100%;

  .content {
    .tab {
      .tb {
        .tabBox {
          width: px2rem(164);
          height: px2rem(216);
          padding-top: px2rem(42);
          background-color: #ffffff;
          border-radius: px2rem(4);
          border: solid 1px #02c1ff;
          float: left;
          margin-right: px2rem(42);
          &:nth-last-child(1) {
            margin-right: 0;
          }
          &.hover {
            background-image: linear-gradient(-50deg, #0297ff 0%, #26caff 100%);
            border-radius: 4px;
            .tabName {
              color: #fff;
            }
            .icon {
              border: 1px solid #fff;
            }
          }
          .icon {
            width: px2rem(67);
            height: px2rem(67);
            display: block;
            margin: 0 auto;
            font-size: px2rem(37);
            line-height: px2rem(67);
            text-align: center;
            background-image: linear-gradient(-50deg, #0297ff 0%, #26caff 100%);
            border-radius: 50%;
            color: #fff;
          }
          .tabName {
            text-align: center;
            margin-top: px2rem(33);
            margin-bottom: px2rem(17);
            font-size: px2rem(18);
            line-height: px2rem(24);
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #02c1ff;
            white-space: nowrap;
          }
          .tabLine {
            display: block;
            text-align: center;
          }
        }
      }
    }
   
  }
   .tc {
      margin-top: px2rem(78);
      position: relative;
      //   height: px2rem(500);
      background-color: $modelBgColor;
     
      .tabContent {
        position: relative;
        top: 0px;
        left: 0px;
        padding-top: px2rem(20);
        .iconfont {
          font-size: px2rem(12);
          color: $mainColor;
        }
        .tcTitle {
          font-size: px2rem(20);
          font-weight: normal;
          font-stretch: normal;
          line-height: px2rem(30);
          letter-spacing: 0px;
          color: #333333;
          margin-bottom: px2rem(36);
          text-indent: px2rem(40);
        }
        .tcInfo {
          text-indent: px2rem(30);
          font-size: px2rem(16);
          font-weight: normal;
          font-stretch: normal;
          line-height: px2rem(28);
          letter-spacing: 0px;
          color: #333333;
          margin-bottom: px2rem(37);
        }
        .peixun {
          .teacher {
            width: px2rem(187);
            height: px2rem(239);
          }
          .right {
            float: right;
            width: px2rem(873);
            margin-right: px2rem(100);
            p {
              font-size: px2rem(16);
              font-weight: normal;
              font-stretch: normal;
              line-height: px2rem(30);
              letter-spacing: 0px;
              color: #333333;
            }
          }
        }
        .course {
          text-indent: px2rem(40);
          .ccTitle {
            font-size: px2rem(20);
            font-weight: normal;
            font-stretch: normal;
            line-height: px2rem(30);
            letter-spacing: 0px;
            color: #333333;
            margin: px2rem(36) 0;
            text-indent: px2rem(40);
          }
          .ct_cont {
            margin-bottom: px2rem(30);
            .ct_tit {
              font-size: px2rem(16);
              font-weight: bold;
              font-stretch: normal;
              line-height: px2rem(28);
              letter-spacing: 0px;
              color: #333333;
            }
            .ct_info {
              font-size: px2rem(16);
              font-stretch: normal;
              line-height: px2rem(28);
              letter-spacing: 0px;
              color: #333333;
              text-indent: px2rem(60);
            }
          }
        }
      }
    }
}
</style>
