<template>
    <div class="case">
        <boxmy>
            <div class="content" slot="content">
                <titlemy :title="title"></titlemy>
                <div class="con">
                    <div class="pane" v-for="item of cases" :key="item.image">
                        <img :src="item.image" alt="">
                        <h3 class="name">{{item.name}}</h3>
                        <p v-for="i of item.infos" :key="i" class="info">{{i}}</p>
                        <p class="category">{{item.category}}</p>
                    </div>
                </div>
            </div>
        </boxmy>
    </div>
</template>
<script>
import boxmy from './boxmy';
import titlemy from './titlemy';

export default {
  name: 'case',
  data() {
    return {
      title: {
        en: 'SUCCESSFUL CASE',
        name: '成功案例',
        color: '#333',
      },
      cases: [
        {
          image: require('@/assets/images/cases/t1.png'),
          name: '康然',
          infos: [
            '2018年度Super对接合伙人',
            '24个Offer 设计金额156.2万',
            '单月8个Offer 涉及金额54.2万',
          ],
          category: '明星对接合伙人',
        },
        {
          image: require('@/assets/images/cases/t2.png'),
          name: 'aaa',
          infos: [
            '2018年度Super推荐合伙人',
            '23个Offer涉及金额160.3万',
          ],
          category: '明星推荐合伙人',
        },
        {
          image: require('@/assets/images/cases/t3.png'),
          name: 'bbb',
          infos: [
            '2018年度Super对接合伙人',
            '24个Offer 设计金额156.2万',
            '单月8个Offer 涉及金额54.2万',
          ],
          category: '明星对接合伙人',
        },
      ],
    };
  },
  components: {
    boxmy, titlemy,
  },
};
</script>
<style lang="scss" scoped>
    .case {

    }
</style>
