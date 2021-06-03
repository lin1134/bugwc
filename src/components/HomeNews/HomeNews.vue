<template>
  <div class="mydiv">
    <div class="myP">
      <p>疫情动态</p>
    </div>
    <div class="myComtent">
      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>-->

      <!-- <news v-for="(valuse) in Item" :key="valuse.id">
        <a :href="valuse.sourceUrl">
          <p>{{valuse.pubDateStr}}</p>
          <div>{{valuse.title}}</div>
        </a>
      </news> -->


      <news>
        <a href="http://m.news.cctv.com/2020/06/02/ARTIxEXFvSZLp51T1qBGaMik200602.shtml">
          <p>1小时前</p>
          <div>四川新增2例新冠肺炎确诊病例 原为境外输入无症状感染者</div>
        </a>
      </news>

	   <news>
        <a href="https://m.weibo.cn/status/4511267430083447?">
          <p>2小时前</p>
          <div>巴西新冠病毒感染病例超52万例</div>
        </a>
      </news>

	   <news>
        <a href="https://m.weibo.cn/status/4511257749096046?">
          <p>3小时前</p>
          <div>美国新冠病毒感染病例超180万例</div>
        </a>
      </news>

	   <news>
        <a href="http://app.cctv.com/special/cportal/detail/arti/index.html?id=Arti7lcOpWEvCCaLQnogV74r200602&isfromapp=1">
          <p>3小时前</p>
          <div>巴西情报机构强调社会隔离重要性 各地仍准备逐步放开隔离</div>
        </a>
      </news>

	  <news>
        <a href="http://m.news.cctv.com/2020/06/02/ARTIgT3D3ZqjeZQFm2BSrcOx200602.shtml">
          <p>6小时前</p>
          <div>世卫组织：部分国家解除封锁措施后出现病例增长</div>
        </a>
      </news>
    </div>
  </div>
</template>

<script>
import Path from "../../Path/PathData.js";
import news from "./nwes/news.vue";
export default {
  data() {
    return {
      // list: [],
      // loading: false,
      // finished: false,
      // loadTag:1 ,//标记是否触发onLoad函数
      Item: []
    };
  },

  methods: {
    // getItem() {
    //   //获取新闻
    //   Path._getQuery(respont => {
    //     this.Item = respont.data.newslist[0].news;
    //     console.log(this.Item);
    //   });
    // }
    // }
  },
  created() {
    // this.getItem();
    // console.log(Path);
  },
  mounted() {},

  components: {
    news
  }
};
</script>

<style scoped>
.mydiv {
  padding: 2vw;
  background: #f8f8f8;
}
.myComtent {
  padding: 3vw;
}
.myP {
  background: #f8f8f8;
  color: #0000ff;
}
.myP > p {
  position: relative;
  text-indent: 1rem;
}
.myP > p:after {
  display: block;
  content: "";
  position: absolute;
  width: 1vw;
  height: 100%;
  background: #0000ff;
  top: 0;
  margin-right: 3vw;
}
</style>
