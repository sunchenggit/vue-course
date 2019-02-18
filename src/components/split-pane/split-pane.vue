<template>
	<div class="split-pane-wrapper" ref="outer">
		<div class="pane pane-left" :style="{ width:leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px` }">
			<slot name="left"></slot>
		</div>
		<div class="pane-trigger-con" @mousedown="handleMousedown" :style="{ left:triggerLeft, width: `${triggerWidth}px`   }"></div>
		<div class="pane pane-right" :style="{ left:leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px` }">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SplitPane",
		props: {
			value: {
				type: Number,
				default: .5
			},
			triggerWidth: {
				type: Number,
				default: 8
			},
			min: {
				type: Number,
				default: .1
			},
			max: {
				type: Number,
				default: .9
			}
		},
		data () {
			return {
				canMove: false,
				initOffset: 0
			}
		},
		computed: {
			leftOffsetPercent () {
				return `${this.value * 100}%`
			},
			triggerLeft () {
				return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
			}
		},
		methods: {
			handleClick () {
				this.value += 0.02
			},
			handleMousedown (event) {
				document.addEventListener('mousemove', this.handleMousemove)
				document.addEventListener('mouseup', this.handleMouseup)
				// 点击时候的那个点距离页面左侧的距离 - 中间横条距离页面左侧的距离
				this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
				this.canMove = true
			},
			handleMousemove (event) {
				if (!this.canMove) return;
				const outerRect = this.$refs.outer.getBoundingClientRect();
				let offsetPercent = (event.pageX - this.initOffset + (this.triggerWidth / 2) - outerRect.left) / outerRect.width;
				if (offsetPercent < this.min ) offsetPercent = this.min
				if (offsetPercent > this.max ) offsetPercent = this.max
				// this.$emit('input', offsetPercent)
				this.$emit('update:value', offsetPercent)
			},
			handleMouseup () {
				this.canMove = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.split-pane-wrapper {
		height: 100%;
		position: relative;
		.pane {
			height: 100%;
			position: absolute;
			&-left {
				background: palevioletred;
			}
			&-right {
				right: 0;
				background: paleturquoise;
			}
			&-trigger-con {
				height: 100%;
				background: #f00;
				position: absolute;
				top:0;
				z-index: 9;
				user-select: none; // 不会在元素上选中
				cursor: col-resize;
			}
		}
	}
</style>
