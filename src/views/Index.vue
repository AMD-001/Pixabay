<template>
	<div>
		<My_header></My_header>
		<My_search></My_search>
		<My_foot></My_foot>
	</div>
</template>

<script>
	import My_search from '../components/My_search'
	import My_foot from '../components/My_foot.vue'
	import My_header from '../components/My_header.vue'
	export default{
		components:{
			My_search,
			My_foot,
			My_header,
		}
	}
</script>

<style>
</style>