<template>
	<div>
		<div class="ChinaMap" ref="ChinaMap"></div>
	</div>
</template>

<script>
import '../../../node_modules/echarts/map/js/china.js'; //制作参数
import ChianJs from './ChinaMap.js'; //地图参数
export default {
	data() {
		return {
				ChianJs:ChianJs
		};
	},

	methods: {
		mapEchartsInit() {
			let myChart = this.$echarts.init(this.$refs.ChinaMap);
			// console.log(ChianJs);

			myChart.setOption(ChianJs);
		}
	},
	mounted() {
		this.mapEchartsInit();
	},
	components: {}
};
</script>

<style scoped>
.ChinaMap {
	width: 100%;
	height: 45vh;
	/* background: #0000FF; */
}
</style>
