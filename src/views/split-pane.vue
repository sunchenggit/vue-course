<template>
	<div class="split-pane-con">
		<splitPane :value.sync="offsetValue">
			<div slot="left">left</div>
			<div slot="right">right</div>
		</splitPane>
	</div>
</template>

<script>
	import splitPane from '_c/split-pane';
	export default {
		components: {
			splitPane
		},
		data () {
			return {
				offsetValue: .8
			}
		},
		methods: {
// 			handleInput (value) {
// 				this.offsetValue = value
// 			}
		}
	}
</script>

<style lang="scss" scoped>
	.split-pane-con {
		width: 400px;
		height: 200px;
		background: palegoldenrod;
		text-align: left;
	}
</style>
