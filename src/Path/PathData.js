
import path from "./path.js"
import PathMethods from "./PathMethods.js"


export default {
	// 获取全国疫情情况,得到内容,successs是回调函数
		 _wholeWorldData(success){
			// PathMethods.AxiosGet(path.CovidUrl)
			return new Promise((resolve,reject)=>{
				PathMethods.AxiosGet(path.wholeWorldUrl)
				.then((res)=>{
						resolve (success(res))
				}),(err)=>{
					reject(err)
				}
			})
	},
	//登录,success是回调函数			post
	_login(data,success){
		return new Promise((resolve,reject)=>{
			PathMethods.AxiosGet(path.login,data)
			.then((res)=>{
					resolve (success(res))
			}),(err)=>{
				reject(err)
			}
		})
	},
	//注册，success是回调函数，data是数据
	_reg(data,success){
		return new Promise((resolve,reject)=>{
			PathMethods.AxiosPost(path.reg,data)
			.then((res)=>{
				resolve (success(res))
			}),(err)=>{
				reject(err)
			}
		})
	},
	// 获得动态播报		success是回调函数      get
	_getQuery(success){
		return new Promise((resolve,reject)=>{
			PathMethods.AxiosGet(path.getQuery)
			.then((res)=>{
					resolve (success(res))
			}),(err)=>{
				reject(err)
			}
		})
	},
	// 获取谣言情况			success是回调函数			get
	_getIdentifyRumor(success){
		return new Promise((resolve,reject)=>{
			PathMethods.AxiosGet(path.getIdentifyRumor)
			.then((res)=>{
					resolve (success(res))
			}),(err)=>{
				reject(err)
			}
		})
	}
}
