<template>
    <div class="mydiv">
			<div class="login">
				<h1>
						疫情知多少
				</h1>
				<div>
					<div class="user">
						<van-icon name="friends" color="#ffffff" size="30"/><input type="text" placeholder="账号" v-model="username">
					</div>
					<div class="password">
						<van-icon name="question" color="#ffffff" size="30"/>
						<input type="text" placeholder="密码" v-model="password">
					</div>
					<button @click="login">登录</button>
					<!-- <router-link to="/password" tag="button">注册</router-link> -->
				</div>
			</div>
			<div class="reg" @click="reg">去注册</div>
		</div>
</template>

<script>
	import Path from "../../Path/PathData.js"
export default {
    data () {
      return {
				 username: '',
				 password: '',
			}
    },

    methods: {
			// 判断登录是否成功
			login(){
				this.$router.push({path:"/home"})

				// Path._login(`username=${this.username}&password=${this.password}`,(response)=>{
				// 	console.log(response)
				// 	console.log(`username=${this.username}&password=${this.password}`)	
				// 	if(response.data.flag)	//登录成功
				// 	{
				// 								this.$toast({
				// 								  message: '登陆成功',
				// 								  icon: 'success',
				// 								});
				// 								 this.$router.push({path:"/home"})
				// 	}
				// 	else				//登录失败失败
				// 	{
				// 								 // this.login();
				// 								 this.$toast(response.data.msg)
				// 	}
				// })
			},
			// 跳转到注册页
			 reg(){
				 this.$router.push({path: '/reg'})
			 },
		},

    components: {},
}
</script>

<style scoped>
	.mydiv{
		height: 100vh;
		width: 100%;
		background: linear-gradient(#36c7f4, #0162af);
		position: relative;
	}
	.login{
		width: 80%;
		padding: 3vw;
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%,30%);
	}
	.login>h1{
		margin: 0;
		margin-bottom: 50px;
		text-align: center;
		background: linear-gradient(to right, red, blue);
		-webkit-background-clip: text;
		color: transparent;
	}
	input{
		width: 80%;
		outline: none;
		border: none;
		background: none;
		color: #FFFFFF;
	}
	.user,.password{
		height: 30px;
		display: flex;
		justify-content: space-between;
		margin-bottom:20px;
		border-bottom: 1px solid #ffffff;
	}
	button{
		width: 100%;
		height: 6vh;
		text-align: center;
		border: none;
		background: #FFFFFF;
		margin-bottom:20px;
	}
	
	/* 注册 */
	.reg{
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 10vh;
		color: #FFFFFF;
	}
</style>
