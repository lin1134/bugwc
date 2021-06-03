<template>
    <div class="CoverOne">
			<p>更新于:
				<span>2020年5月31日</span>
			</p>
			<div class="top-bar">
				<router-link to="/home/CoverOne/HomeChina" tag="div"><but><span>国内状况</span></but></router-link>
				<router-link to="/home/CoverOne/HomeProvince" tag="div"><but><span>省内消息</span></but></router-link>
				<router-link to="/home/CoverOne/HomeNews" tag="div"><but><span>疫情动态</span></but></router-link>
			</div>
			<keep-alive>
					<router-view></router-view>
			</keep-alive>
		
			
			
		</div>

</template>

<script>
import but from "../Bottombar/but/but.vue"
import {mapState} from 'vuex'
export default {
    data () {
      return {}
    },

    methods: {},
		computed:{
			...mapState(["UPDATAIME"])
		},
		mounted() {},
    components: {
			but,

		},
}
</script>

<style scoped>
	p{
		margin: 0;
		color: #dddddd;
	}
	.top-bar{
		display: flex;
		flex-wrap: nowrap;
	}
		.top-bar>div{
			width: 100%;
	}
	.active{
		background: #f8f8f8;
		font-weight: bold;
	}
</style>
