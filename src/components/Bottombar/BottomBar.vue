<template>
    <div class="bottom-bar">
				<!-- 疫情消息 -->
				<router-link to="/home/CoverOne" tag="div">
					<but>
						<van-icon name="wap-home" size="15"/>
						<span>疫情消息</span>
					</but>
				</router-link >
					<!-- 知道了么 -->
				<router-link to="/home/CoverTwo" tag="div">
					<but>
						<van-icon name="medal" size="15"/>
						<span>知道了么</span>
					</but>
				</router-link>
				<!-- 我的信息 -->
				<router-link to="/home/myStuff" tag="div">
					<but>
						<van-icon name="friends" size="15"/>
						<span>我的信息</span>
					</but>
				</router-link>
		</div>
</template>

<script>
	import but from "./but/but.vue"
export default {
    data () {
      return {}
    },

    methods: {},

    components: {but},
}
</script>

<style scoped>
	.active{
		color: #33c9ff;
	}
	/* 底部导航栏 */
	.bottom-bar{
		margin-top: 6vh;
		height: 6vh;
		width: 100%;
		position: fixed;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		color: #999999;
		box-shadow:0px 10px 30px 10px #abcdef;
	}
	.bottom-bar>div{
		width: 100%;
	}
</style>
