<template>
    <div class="titlemy">
         <div class="title">
          <p class="en" :style="{color:title.color}">{{title.en}}</p>
          <h2 class="tit" :style="{color:title.color}">{{title.name}}</h2>
        </div>
    </div>
</template>
<script>
export default {
  name: 'titlemy',
  props: {
    title: {
      en: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '#fff',
      },

    },
  },
};
</script>
<style lang="scss" scoped>
    .titlemy {
    .title {
      margin-top: px2rem(62);
      margin-bottom: px2rem(62);
      .en {
        text-align: center;
        font-size: px2rem(22);
        line-height: px2rem(18);
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
      }
      .tit {
        font-family: MicrosoftYaHei;
        font-size: px2rem(30);
        font-weight: normal;
        font-stretch: normal;
        line-height: px2rem(38);
        letter-spacing: 0px;
        color: #333333;
        text-align: center;
      }
    }
    }
</style>
