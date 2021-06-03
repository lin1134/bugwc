import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
				UPDATAIME:""
  },
  mutations: {
		// 获取更新时间
		SAVEupdateTime(state,data){
			state.UPDATAIME=data
		},
		
  },
  actions: {
  },
  modules: {
  }
})
