<template>
    <div>
			<ul>
				<li class="myli">
					<slot>
						
					</slot>
					<!-- <van-icon name="setting" />
					<span class="name1">编辑资料</span>
					<span class="name2"></span>
					<van-icon name="arrow" size=16 /> -->
				</li>
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
	.myli{
		height: 7vh;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		padding: 2vw;
		border-bottom: 1px solid #DDDDDD;
		box-sizing: border-box;
	}
	.myli>.name1{
		flex: 1;
		padding-left: 2vw;
		font-size: 16px;
	}
</style>
