<template>
    <div>
				<p>定位：<span>福建省</span></p>
				<!-- 省内的数据 -->
				<div class="province">
					<my-ul-li>
						<p>现存确诊</p>
						<span>1245</span>
						<!-- <p>较昨日<span></span></p>	 -->
					</my-ul-li>
					
					<my-ul-li>
							<p>现存确诊</p>
							<span>1245</span>
							<!-- <p>较昨日<span></span></p>			 -->
					</my-ul-li>
					
					<my-ul-li>
							<p>现存确诊</p>
							<span>1245</span>
							<!-- <p>较昨日<span></span></p>			 -->
					</my-ul-li>
				</div>
				<!-- 新增趋势图 -->
				<add-up></add-up>
				<!-- l累计趋势 -->
				<new-trend class="new_trend"></new-trend>
		</div>
</template>

<script>
import MyUlLi from "../Home/MyUILI/MyUILI.vue"
import	addUp from "./addUp/addUp.vue"
import newTrend from "./newTrend/newTrend.vue"
export default {
    data () {
      return {}
    },

    methods: {},

    components: {
			MyUlLi,
			addUp,
			newTrend,
		},
}
</script>

<style scoped>
	p{
		background: #f8f8f8;
	}
	.province{
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		
	}
	.province>div{
		width: 100%;
	}
	.new_trend{
		margin-bottom: 6vh;
	}
</style>
