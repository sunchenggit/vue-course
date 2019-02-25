<template>
	<div>
		<list :list="list" :render="renderFunc"></list>
	</div>
</template>

<script>
	import List from '_c/list'
	export default {
		data () {
			return {
				list: [
					{ name: 'suncheng' },
					{ name: 'ceshi' } 
				]
			}
		},
		components: {
			List
		},
		methods: {
			handleClick (event) {
				console.log(event)
			},
			renderFunc (h, name) {
				return h('i', {
					style: {
						color: 'pink'
					}
				}, name)
			}
		}
	}
</script>

<style>
</style>
