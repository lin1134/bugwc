export default {
	// 获取疫情数据
	wholeWorldUrl: "http://localhost:8080/Dat/country/getCountry",			//全国疫情
	login:"http://localhost:8080/Dat/user/login",			//登录接口  post
	reg:"http://localhost:8080/Dat/user/addUser"		,//注册接口			post
	getQuery:"http://localhost:8080/Dat/query/getQuery"			,//获得动态播报
	getIdentifyRumor:"http://localhost:8080/Dat/identifyRumor/getIdentifyRumor"	,					//谣言
}
