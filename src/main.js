import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/reset.css"
// 使用VantUi框架
import Vant from 'vant';
import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.use(Toast);
import { Overlay } from 'vant';		//遮蔽器
Vue.use(Overlay);
import { Area } from 'vant';	//地址选择
Vue.use(Area);
import { ActionSheet } from 'vant';		//动作面板，用于制作选项男女
Vue.use(ActionSheet);
import { Popup } from 'vant';	//弹出层
Vue.use(Popup);
// import { ImagePreview } from 'vant';		//点击图片放大
// Vue.use(ImagePreview)
import { Uploader } from 'vant';		//文件上传
Vue.use(Uploader);
import { Lazyload } from 'vant';			//图片懒加载
Vue.use(Lazyload, {
  preLoad: 1.3,
  loading: './assets/time1.gif',
  attempt: 1
})
// 使用echarts插件
import Echarts from "echarts";
Vue.prototype.$echarts = Echarts;			//全局变量
// 使用axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
// 引用自编获取数据路径数据
import VueCropper from 'vue-cropper'		//头像上传截图插件
Vue.use(VueCropper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
