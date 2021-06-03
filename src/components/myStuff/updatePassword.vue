<template>
    <div>
			<div class="topBar">
				<van-icon name="arrow-left" size=30px  @click="front"/>
				<but>修改密码</but>		
			</div>
			<div>
				<ul class="UpdatePassword">
					<!-- 原始密码 -->
					<li>
						<span>旧密码</span>
						<input type="password" placeholder="请输入旧密码">
					</li>
					<li>
						<span>新密码</span>
						<input type="password" placeholder="请输入新密码">
					</li>
					<li>
						<span>新密码</span>
						<input type="password" placeholder="请输入新密码">
					</li>
					<!-- 确定 -->
					<li>
						<van-button type="danger" @click="UpdatePassword" class="mydate">确定修改</van-button>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
import but from "../Bottombar/but/but.vue"
export default {
    data () {
      return {
			}
    },

    methods: {
			front(){
				this.$router.go(-1)
			},
			UpdatePassword(){
				if(1){
					this.$router.go(-1)
				}
				// else if(){
					
				// }
				// else if(){
					
				// }
			}
		},

    components: {
			but,
		},
}
</script>

<style scoped>
	.topBar{
		display: flex;
		align-items: center;
		overflow: hidden;
		padding-left: 2vw;
		padding-right: 2vw;
		box-sizing: border-box;
		z-index: 99;
		background: #FFFFFF;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.UpdatePassword{
		margin-top: 3vh;
	}
	.UpdatePassword>li>input{
		flex: 1;
		padding-left: 3vw;
		padding-bottom: 3vw;
	}
	.UpdatePassword>li{
		width: 90%;
		margin: auto;
		display: flex;
		align-items: center;
		border: 1px #DDDDDD solid;
		margin-bottom: 5vh;
		height: 6vh;
		padding-left: 3vw;
		padding-right: 3vw;
	}
	.UpdatePassword>li:last-child{
		border: none;
		padding: 0;
		border-radius: 3rem;
	}
	.mydate{
		width: 100%;
		border-radius: 3rem;
	}
</style>
