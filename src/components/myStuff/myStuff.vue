<template>
	<div>
		<div class="topBack">
			<img src="../../assets/myBack.jpg" alt="" />
			<div class="me">
				<img src="../../assets/myBack.jpg" alt="" />
				<div>
					<p>
						名称：
						<span>帅哥</span>
					</p>
					<p>
						账户：
						<span>15606502637</span>
					</p>
				</div>
			</div>
		</div>
		<div class="myMessage">
			<!-- 编辑资料 -->
			<li @click="updateSessage()">
				<myBox>
					<van-icon name="setting" size="16" color="red" />
					<span class="name1">编辑资料</span>
					<van-icon name="arrow" size="16" />
				</myBox>
			</li>

			<!-- 个人地址 -->
			<li is-link @click="showPopup()">
				<myBox>
					<van-icon name="map-marked" size="16" color="red" />
					<span class="name1">个人地址</span>
					<span ref="spanAddres"></span>
					<van-icon name="arrow" size="16" />
				</myBox>
			</li>

			<!-- 手机号码 -->
			<li>
				<myBox>
					<van-icon name="phone" size="16" color="red" />
					<span class="name1">手机号码</span>
					<span style="color: #999999;">15606502637</span>
					<van-icon name="arrow" size="16" color="#999999" />
				</myBox>
			</li>

			<!-- 修改密码 -->
			<li @click="updatePassword()">
				<myBox>
					<van-icon name="warning" size="16" color="red" />
					<span class="name1">修改密码</span>
					<van-icon name="arrow" size="16" />
				</myBox>
			</li>

			<!-- 退出登录 -->
			<li @click="output()">
				<myBox>
					<van-icon name="share" size="16" color="red" />
					<span class="name1">退出登录</span>
					<van-icon name="arrow" size="16" />
				</myBox>
			</li>
		</div>
		<!-- 地址选择弹出 -->
		<van-popup v-model="show" :style="{ height: '40%' }" position="bottom" get-container="#app">
			<van-area title="请选择地址" :area-list="areaList" value="110101" @confirm="onConfirm" @cancel="onCancel()" />
		</van-popup>
	</div>
</template>

<script>
import areaList from './area.js';
import { Toast } from 'vant';
import myBox from './myBox/myBox.vue';
export default {
	data() {
		return {
			areaList: areaList,
			// searchResult: [],
			show: false,
			province:"",		//省
			city:"",				//市
			district:"",			//区
			provinceCityD:"",		//省市区
			images:"../../assets/myBack.jpg",
		};
	},

	methods: {
		updateSessage() {
			//跳转到个人信息修改界面
			console.log(11);
			this.$router.push('/updateSessage');
		},
		output() {
			//退出登录
			this.$router.replace('/login');
		},
		updatePassword() {
			//修改密码
			this.$router.push('/updatePassword');
		},
		showPopup() {
			//弹出层控制
			this.show = !this.show;
		},
		onConfirm(e) {
			//地址确定关闭时
			if (e[0] && e[1] && e[2] && e[1]) {
				this.province = e[0].name;
				this.city = e[1].name;
				this.district = e[2].name;
				this.provinceCityD = e[0].name  + e[1].name + e[2].name;
				this.$refs.spanAddres.innerText=this.provinceCityD 
				} 
			else 
			{
				// this.$refs.area.reset();
			}

			this.show = !this.show;
		},
		onCancel() {
			//地址确定取消时
			this.show = !this.show;
		},
	},
	mounted() {},
	components: {
		myBox
	}
};
</script>

<style scoped>
.topBack {
	height: 20vh;
	width: 100%;
	position: relative;
}
.topBack > img {
	width: 100%;
	height: 100%;
}
.me {
	display: flex;
	align-items: center;
	width: 90%;
	padding: 2vw;
	height: 16vh;
	background-color: #ffffff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 0);
	/* z-index: 9999; */
	border-radius: 1rem;
	box-sizing: border-box;
	box-shadow: 0.01rem 0.15rem 0.3rem rgba(0, 0, 0, 0.15);
}
.me > img {
	height: 10vh;
	width: 10vh;
	border-radius: 50%;
}
.me > div {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex: 1;
	padding-left: 2vw;
}
.me > div > p {
	width: 100%;
	margin: 0;
}
/* 个人信息 */
.myMessage {
	margin-top: 8vh;
	border: 1px solid #dddddd;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0.01rem 0.15rem 0.3rem rgba(0, 0, 0, 0.15);
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.block {
	width: 120px;
	height: 120px;
	background-color: #fff;
}
</style>
