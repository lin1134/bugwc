import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import login from '../components/login/login.vue'; //登陆
import Reg from "../components/Reg/Reg.vue" //注册
import home from "../components/Home/Home.vue"//主页面
import HomeChina from "../components/HomeChina/China.vue"			//中国国内
import HomeProvince from "../components/HomeProvince/HomeProvince.vue"			//省内
import HomeNews from "../components/HomeNews/HomeNews.vue"					
import CoverTwo from "../components/CoverTwo/CoverTwo.vue"					//第二大功能也
import CoverTwoKnowRumour from "../components/CoverTwo/CoverTwoKnowRumour/CoverTwoKnowRumour.vue"					
import CoverTwoPaper from "../components/CoverTwo/CoverTwoPaper/CoverTwoPaper.vue"						
import myStuff from "../components/myStuff/myStuff.vue"
import CoverOne from "../components/CoverOne/CoverOne.vue"		//第一功能页
import updateSessage from "../components/myStuff/updateSessage.vue"		//修改个人信息
import updatePassword from "../components/myStuff/updatePassword.vue"				//修改密码
const routes = [{
		path: '/',
		redirect: "/login"
	},
	{
		path: '/login',
		component: login//登录
	},
	{
		path: '/reg',
		component: Reg//注册
	},
	{			//修改个人信息
		path:"/updateSessage",
		component:updateSessage
	},
	{			//修改密码
		path:"/updatePassword",
		component:updatePassword,
	},
	{
		path: '/home',
		component: home,
		redirect:"/home/CoverOne",
		children:[
			{
				path: 'CoverOne',//疫情情况
				component:CoverOne,
				redirect:"/home/CoverOne/HomeChina",
				children: [
					{path: 'HomeChina',component:HomeChina},
					{path:"HomeProvince",component:HomeProvince},
					{path:"HomeNews",component:HomeNews},
				]
			},
			{
				path:"CoverTwo",		//第二大叶
				component:CoverTwo,
				redirect:"/home/CoverTwo/CoverTwoKnowRumour",
				children:[
					{path:"CoverTwoKnowRumour",component:CoverTwoKnowRumour},
					{path:"CoverTwoPaper",component:CoverTwoPaper}
				]
			},
			{path:"myStuff",component:myStuff},			//我的信息
		]
		// children: [
		// 	{path: 'HomeChina',component:HomeChina},
		// 	{path:"HomeProvince",component:HomeProvince},
		// 	{path:"HomeNews",component:HomeNews},
		// ]
	},
	// {path:"/myStuff",component:myStuff}
]

const router = new VueRouter({
	linkActiveClass: "active",//全局
	routes
})

export default router
