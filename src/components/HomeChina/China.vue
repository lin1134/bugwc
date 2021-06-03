<template>
	<div>
		<div class="China">
			<div class="message">
				<my-ul-li>					
						<p>现存确诊</p>
						<span>84597</span>
						<!-- <p>较昨日<span></span></p>			 -->
				</my-ul-li>
				<my-ul-li>
						<p>疑似病例总数</p>
						<span>161</span>
						<!-- <p>较昨日<span></span></p>			 -->
				</my-ul-li>
				<my-ul-li>
						<p>死亡总数</p>
						<span>4645</span>
						<!-- <p>较昨日<span></span></p>			 -->
				</my-ul-li>
			</div>
			
			
			<div class="message">
				<my-ul-li>					
						<p>今日新增确诊</p>
						<span>9</span>
						<!-- <p>较昨日<span></span></p>			 -->
				</my-ul-li>
				<my-ul-li>
						<p>今日新增疑似</p>
						<span>5</span>
						<!-- <p>较昨日<span></span></p>			 -->
				</my-ul-li>
		
				<my-ul-li>
						<p>今日新增死亡</p>
						<span>0</span>
						<!-- <p>较昨日<span></span></p>			 -->
				</my-ul-li>
			</div>
			
			
			<china-map ></china-map>
			<china-line :CHinaData="CHinaData"></china-line>
		</div>
		
	</div>
</template>

<script>
import MyUlLi from "../Home/MyUILI/MyUILI.vue"
import ChinaMap from "./ChinaMap.vue"
import ChinaLine from "./ChinaLine.vue"
import Path from"../../Path/PathData.js" ;
import {mapMutations} from "vuex"
export default {
    data () {
      return {
				CHinaData:"",//中国疫情数据
				
      }
    },

    methods: {
			// 获取数据,传一个回调函数
			// getCHinaData(){
			// 	Path._wholeWorldData((respont)=>{
			// 		this.CHinaData = respont.data.data
			// 		// console.log(this.CHinaData)
			// 		this.selectItem(this.CHinaData.updateTime)
					
			// 		// console.log(this.CHinaData.data.data.updateTime)
					
			// 	})
			// },
			// ...mapMutations(["SAVEupdateTime"]),			//获取vuex里面的方法
			// selectItem(value){					//修改值
			//   this.SAVEupdateTime(value)
			// },
    },
		mounted(){
			// this.getCHinaData()
		},
    components: {
				MyUlLi,
				ChinaMap,
				ChinaLine,
		},
}
</script>

<style scoped>
	.China{
		height: 50vh;
		width: 100%;
		margin-bottom: 6vh;
	}
	/* 消息 */
	.message{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.message>div{
		width: 100%;
	}
</style>
