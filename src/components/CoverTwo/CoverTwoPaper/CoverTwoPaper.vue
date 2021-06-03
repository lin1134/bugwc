<template>
    <div>
			<ul>
				
				
				<li v-for="(value,index) in question" :key="index" class="myLi" ref="myLi">
					<p>
						<span>{{index+1}}、</span>
						{{value.question}}
					</p>
							
					<label ref="label" @click.prevent.stop="isTrue($event)">
						<input type="radio" :name="value.id" value="男生" ref="radio" id="radio">
						<div ref="choose">A</div>
						<span ref="text">正确</span>			
					</label>
							
					<label ref="label" @click.prevent.stop="isTrue($event)">
						<input type="radio" :name="value.id" value="男生" ref="radio" id="radio">
						<div ref="choose">B</div>
						<span ref="text">错误</span>	
					</label>
									
				</li>
			</ul>	
			<button class="but" @click="submit" ref="but">确定</button>
			
		</div>
</template>

<script>
import Path from '../../../Path/PathData.js';
export default {
    data () {
      return {
				question:[
					{answer: "错误",question: "疫情期间可以串门、聚集。前往人多密集的地方、乘坐交通工具时可以不佩戴口罩。",id: 9},
					{answer: "错误",question: "出门回到家，可以不洗手。",id: 11},
					{answer: "正确",question: "戴口罩时，分清楚口罩的正面、反面、上端、下端后，先将手洗干净，确定口罩是否正确之后，将两端的绳子挂在耳朵上。",id: 3},
					{answer: "正确",question: "配戴前后要洗手，使用过后的口罩不可随意丢弃。",id: 5},
					{answer: "正确",question: "将口罩佩戴完毕后，需要用双手压紧鼻梁两侧的金属条，使口罩上端紧贴鼻梁，然后向下拉伸口罩，使口罩不留有褶皱，覆盖住鼻子和嘴巴。一定要贴合面部，形成密闭的环境，让通气经过口罩而不是四周的缝隙。",id: 6},
					{answer: "正确",question: "口罩使用时，颜色深面朝外，浅面朝内。",id: 1},
					{answer: "正确",question: "正确佩戴防护有效的口罩，洗手后佩戴口罩外出，回到家中摘掉口罩后首先洗手消毒。",id: 8},
					{answer: "正确",question: "防疫期间，摘口罩前后做好手卫生，废弃口罩放入垃圾桶内，每天两次使用75%酒精或含氯消毒剂（如84消毒液）对垃圾桶进行消毒处理。",id: 7},
					{answer: "正确",question: "配戴口罩要科学，口罩并不是戴越多越好，医用外科口罩或者N95口罩正确佩戴一层就够。",id: 4},
					{answer: "正确",question: "家中每天要保持一定时间的开窗通风，建议每天开窗通风2次，每次15分钟以上。",id: 10},
				],
			}
    },

    methods: {
			// 选择答案
			isTrue(e){
				var two = e.currentTarget.parentNode.children
				for(var i=0;i<3;i++){		//先全部取消
					if(i>0){
						two[i].style.color="#000000",
						two[i].style.fontWeight="normal"
						// console.log(two[1])
						two[i].firstElementChild.setAttribute("checked","false")
					}
				};
				// console.log(two)
				let radio = e.currentTarget.firstElementChild
				radio.setAttribute("checked","true")
				e.currentTarget.style.color="green"
				e.currentTarget.style.fontWeight="bold"
				// console.log(e.currentTarget)
			},
			// 获得题目
			// getQuestion(){
			// 	Path._getQuestion(respont => {
			// 		// console.log(respont.data.data);
			// 		this.question = respont.data.data;
			// 		console.log(this.question);
			// 	});
			// },
			// 判断题目答案是否正确
			submit(){
				// 点击提交按钮
				// console.log()
				if(this.$refs.but.innerText=="确定"){
					let myLi = this.$refs.myLi;
					myLi.forEach((val,index)=>{
						// console.log(val.children[1].firstElementChild.getAttribute("checked"))
						// console.log(val.children[2].firstElementChild.getAttribute("checked"))
						if(val.children[1].firstElementChild.getAttribute("checked")=="true"){		//第一个input选择到,是true
							console.log(val.children[1].children[2].innerText)
							if(this.question[index].answer==val.children[1].children[2].innerText){
								val.children[0].style.color="green"
								val.children[0].style.fontWeight="bold"
							}
							else{
								val.children[0].style.color="red"
								val.children[0].style.fontWeight="bold"
							}
							// this.question[index].answer
						}
						else{
							val.children[0].style.color="red"
							val.children[0].style.fontWeight="bold"
						}
						// if(){
						// 	val.children[2].firstElementChild.getAttribute=="false"
						// }
						this.question[index]
						// val.children[2]
					})
					
					// 修改按钮
					this.$refs.but.innerText="重做"
				}
				// 点击重做按钮
				else{
					location.reload()
				}
			},
			
		},
		created() {
			// this.getQuestion()
		},
		mounted() {
			// this.submit()
		},
    components: {},
}
</script>

<style scoped>
	label{
		display: block;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 2vw;
		margin: 2vh 0 2vh 0;
	}
	label>div{
		width: 5vw;
		height: 5vw;
		text-align: center;
		line-height: 5vw;
		border-radius: 50%;
		border: 1px solid #999999;
		margin-right: 2vw;
	}
	label>input[type="radio"]{
		display: none;
		/* font-weight: bold; */
	}
	.but{
		display: block;
		width: 90%;
		height: 30px;
		margin: auto;
		margin-top: 30px;
		margin-bottom: 60px;
		text-align: center;
		line-height: 30px;
		background: #36C7F4;
	}
</style>
