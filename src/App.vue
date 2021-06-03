<template>
    <div id="app">
			
			<transition mode="out-in">  
			   <router-view></router-view> 
			</transition>
		</div>
</template>

<script>
	// import Login from "./components/login/login.vue"
export default {
    data () {
      return {}
    },

    methods: {},

    components: {
			// Login
			
		},
}
</script>

<style scoped>
	#app{
		height: 100vh;
	}
	.v-enter{
	  transform: translateX(-100%);
	}
	.v-leave-to{
	  transform: translateX(200%);
	}
	.v-enter-active,.v-leave-active{
	  transition: all 0.3s ease;
	}
</style>