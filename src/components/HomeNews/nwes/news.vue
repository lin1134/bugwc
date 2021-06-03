<template>
    <div>
			<div class="content">
				<slot></slot>
			<!-- 	<a href="">
					<p>5月17日8点11分</p>
					<div>
							印尼新增495例新冠肺炎确诊病例 累计17520例
					</div>
				</a> -->
				
			</div>
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
	.content{
		position: relative;
		/* margin: 2vw; */
	}
	.content::after{
		position: absolute;
		top: 0;
		left: 5px;
		display: block;
		content: "";
		height: 100%;
		width: 2px;
		background: #36C7F4;
	}
	.content>a{
		color: #000000;
		display: block;
	}
	.content>a:hover{
		color: #999999;
	}
	.content>a>p{
		font-size: 10px;
		color: #999999;
		position: relative;
		text-indent: 1rem;
	}
	.content>a>p:before{
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		content: "";
		height: 100%;
		width: 10px;
		border-radius: 50%;
		background: #36C7F4;
	}
	.content>a>div{
		position: relative;
		padding: 4vw;
	}

</style>
