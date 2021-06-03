<template>
    <div>
			<ul>
				<li>
					<slot></slot>
				</li>
				
					<!-- <li>
						<p>现存确诊</p>
						<span>1245</span>
						<p>较昨日<span></span></p>
					</li> -->
			</ul>	
		</div>
		
</template>

<script>
export default {
    data () {
      return {}
    },

    methods: {},

    components: {},
}
</script>

<style scoped>
	ul{
		width: 100%;
		height: 50px;
		background: #f8f8f8;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	ul>li{
		display: flex;
		flex-wrap: wrap;
		align-items: space-between;
		justify-content: center;
	}
	ul>li>span{
		display: block;
	}
	ul>li>p,ul>li>span{
		width: 100%;
		
		text-align: center;
	}
	ul>li>p:first-child{
		font-size: 12px;
	}
	ul>li>span{
		font-size: 16px;
		font-weight: bold;
		color: red;
	}
	ul>li>p:last-child{
		color: #999999;
		font-size: 10px;
	}
</style>
