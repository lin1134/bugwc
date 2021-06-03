<template>
    <div class="Home">
			<router-view></router-view>
			<Bottom-bar></Bottom-bar>
		</div>
</template>

<script>
import but from "../Bottombar/but/but.vue"
import BottomBar from "../Bottombar/BottomBar.vue"
import CoverOne from "../CoverOne/CoverOne.vue"
export default {
    data () {
      return {}
    },

    methods: {},

    components: {
			but,
			BottomBar,
			CoverOne,
		},
}
</script>

<style scoped>
	.Home{
		padding: 2vw;
		box-sizing: border-box;
	}
	/* 头部导航栏 */
	.top-bar{
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		
	}

</style>

