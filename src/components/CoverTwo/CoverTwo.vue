<template>
    <div>
			<!-- 第二大封面 -->
			<div class="top-bar">
				<router-link to="/home/CoverTwo/CoverTwoKnowRumour" tag="div"><but><span>辟谣</span></but></router-link>
				<router-link to="/home/CoverTwo/CoverTwoPaper" tag="div"><but><span>答题</span></but></router-link>
			</div>
			
			<keep-alive>
			<router-view></router-view>
			</keep-alive>
			
		</div>
</template>

<script>
import but from "../Bottombar/but/but.vue"
export default {
    data () {
      return {}
    },

    methods: {},

    components: {
			but,
		},
}
</script>

<style scoped>
	.top-bar{
		display: flex;
		flex-wrap: nowrap;
	}
		.top-bar>div{
			width: 100%;
	}
	.active{
		/* background: #f8f8f8; */
		font-weight: bold;
		position: relative;
	}
	.active::before{
		background: #36C7F4;
		content: "";
		display: block;
		height: 2px;
		width: 20%;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%,0);
	}
</style>
