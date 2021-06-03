<template>
    <div class="but">
			<slot>
				
			</slot>
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
	.but{
		height: 6vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 6vh;
	}
	.but>span{
		height: 100%;
		/* width: 100%; */
		font-size: 15px;
		/* color: #999999; */
	}
</style>
