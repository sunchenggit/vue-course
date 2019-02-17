<template>
	<div>
		<CountTo ref="countTo" :className="className" :end-value="endVal" @on-animation-end="handleEnd">
			<span slot="left">总金额:</span>
			<span slot="right">元</span>
		</CountTo>
		<button @click="getNumber">获取数值</button>
		<button @click="up">更新数值</button>
	</div>
</template>

<script>
	import CountTo from '@/components/count-to'
	export default {
		name: 'count-to',
		components: {
			CountTo
		},
		data () {
			return {
				className: 'ceshi',
				endVal: 100
			}
		},
		methods: {
			// ref 用在组件上获取到是当前组件实例，用在元素上获取到是dom
			getNumber () {
				this.$refs.countTo.getCount()
			},
			up () {
				return this.endVal += Math.random() * 100
			},
			handleEnd (val) {
				console.log('end ->:', val)
			}
		}
	}
</script>

<style>
</style>
