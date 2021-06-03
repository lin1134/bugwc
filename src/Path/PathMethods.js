import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
	//用axios的get获取参数
	AxiosGet: function(url) {
		return Vue.axios.get(url)
		// Vue.axios.get(url).then(function(respont) {
		// 	return respont
		// })
	},

	//用axios的post获取参数
	AxiosPost: function(url, data) {
		return Vue.axios.post(url, data)
	},
	//用axios的all获取参数
	AxiosAll: function(arr) {
		return Vue.axios.all(arr)
	},
}
