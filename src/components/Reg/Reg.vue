<template>
    <div class="mydiv">
			<div class="login">
				<h1>
						疫情知多少
				</h1>
				<div>
					<div class="user">
						<van-icon name="friends" color="#ffffff" size="30"/>
						<input type="text" placeholder="账号" v-model="username">
					</div>
					<div class="password">
						<van-icon name="question" color="#ffffff" size="30"/>
						<input type="text" placeholder="密码" v-model="password">
					</div>
					<div class="ipone">
						<van-icon name="phone-o"  color="#ffffff" size="30"/>
						<input type="text" placeholder="手机号码" v-model="phone">
					</div>
					<button @click="isReg">确定注册</button>
					<!-- <router-link to="/password" tag="button">注册</router-link> -->
				</div>
			</div>
			<div class="reg" @click="login">已有账号，去登陆</div>
		</div>
</template>

<script>
	import Path from "../../Path/PathData.js"
export default {
    data () {
      return {
				 username: '',
				 password: '',
				 phone:""
			}
    },

    methods: {
			//跳转登陆页
			 login(){
				 this.$router.push({path: '/login'})
			 },
			 //提升注册成功+跳转
			 
			 isReg(){

				 this.login();
				//  Path._reg(`username=${this.username}&password=${this.password}&phone=${this.phone}`,(response)=>{
				// 	 console.log(response)
				// 	 console.log(this.username,this.password,this.phone)
					 
				// 	 if(response.data.flag)	//注册成功
				// 	 {
				// 	 							 this.$toast(response.data.msg)
				// 	 							 this.login();
				// 	 }
				// 	 else				//注册失败
				// 	 {
				// 	 							 // this.login();
				// 	 							 this.$toast(response.data.msg)
				// 	 }
				//  })
			 }
			 // isReg(){
				//  Path._reg({
				// 	 username:this.username,
				// 	 password:this.password,
				// 	 phone:this.phone
				//  },
				//  //回调函数
				//  function(e){
				// 		console.log(e)
				// 		this.$toast('注册成功');
				// 		this.login();
				// 	}
				//  )
				 
			 // },
		},
		// 渲染
		 mounted(){
			 // this.$toast('注册成功');
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
	.user,.password,.ipone{
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
