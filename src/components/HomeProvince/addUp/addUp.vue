<template>
    <div>
			<p>各城市感染总人数</p>
			<div class="addUp" ref="addUp"></div>
		</div>
</template>

<script>
export default {
    data () {
      return {
				// 参数
				option : {
				     tooltip: {
				            trigger: 'item',
				            formatter: '{a} <br/>{b}: {c} ({d}%)'
				        },
				        legend: {
				            orient: 'vertical',
				            left: 10,
				            data: ['福州市', '厦门市', '莆田市', '三明市', '泉州市','漳州市','南平市','龙岩市','宁德市']
				        },
				        series: [
				            {
				                name: '感染总数',
				                type: 'pie',
				                radius: ['50%', '70%'],
				                avoidLabelOverlap: false,
				                label: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    label: {
				                        show: true,
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                },
				                labelLine: {
				                    show: false
				                },
				                data: [
				                    {value: 335, name: '福州市'},
				                    {value: 210, name: '厦门市'},
				                    {value: 140, name: '莆田市'},
				                    {value: 135, name: '三明市'},
				                    {value: 100, name: '泉州市'},
														{value: 80, name: '漳州市'},
														{value: 70, name: '南平市'},
														{value: 109, name: '龙岩市'},
														{value: 130, name: '宁德市'},
				                ]
				            }
				        ],
						}
			}
    },

    methods: {
			EchartsInit() {				//渲染函数
				let addUp = this.$echarts.init(this.$refs.addUp);
				// console.log(this.option);
			
				addUp.setOption(this.option);
			}
		},
		
		mounted() {
			this.EchartsInit()
		},
    components: {},
}
</script>

<style scoped>
	.addUp{
		height: 40vh;
		width: 100%;
	}
</style>
