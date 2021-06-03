<template>
    <div class="mydiv">
			<p class="myP">全国疫情现存趋势图</p>
			<div class="chineLink" ref="chineLink">
				
			</div>
		</div>
</template>

<script>
// import ChinaLine from "./ChinaLine.js"
export default {
	props:["CHinaData"],
    data () {
      return {
				ChinaLine:{
				    title: {
				        // text: '这几天情况'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data: ['现存病例', '死亡人数', '治愈人数', '疑似病例',],
							
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    toolbox: {
				        // feature: {
				        //     saveAsImage: {}
				        // }
				    },
				    xAxis: {
				        type: 'category',
				        // boundaryGap: false,
				        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [
				       {
				           name: '现存病例',
				           type: 'line',
				           stack: '总量',
				           data: [120, 132, 101, 134, 90, 80, 70]
				       },
				       {
				           name: '死亡人数',
				           type: 'line',
				           stack: '总量',
				           data: [220, 182, 191, 234, 190, 150, 100]
				       },
				       {
				           name: '治愈人数',
				           type: 'line',
				           stack: '总量',
				           data: [150, 232, 201, 154, 190, 130, 90]
				       },
				       {
				           name: '疑似病例',
				           type: 'line',
				           stack: '总量',
				           data: [320, 332, 301, 334, 300, 200, 150]
				       },
				    ]
				},
			}
    },

    methods: {
			mapEchartsInit() {
				let myChart = this.$echarts.init(this.$refs.chineLink);
				// console.log(ChinaLine);
				myChart.setOption(this.ChinaLine);
			}
		},
		mounted() {
			this.mapEchartsInit()
		},
    components: {},
}
</script>

<style scoped>
	.mydiv{
		margin-top: 10px;
		/* background: #f8f8f8; */
		margin-bottom: 8vh;
	}
	.myP{
		position: relative;
		text-indent: 1rem;
	}
	.myP:after{
		display: block;
		content: "";
		position: absolute;
		width: 1vw;
		height: 100%;
		background: #0000FF;
		top: 0;
		margin-right: 3vw;
	}
	.chineLink{
		height: 45vh;
		width: 100%;
	}
</style>
