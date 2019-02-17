<template>
	<div>
		<slot name="left"></slot><span ref="number" :class="counterClass" :id="eleId"></span><slot  name="right"></slot>
	</div>
</template>

<script>
	import CountUP from 'countup'
	export default {
		name: 'CountTo',
		computed: {
			eleId () {
				return `count_up_${this._uid}`
			},
			counterClass () {
				return [
					'count-to-number',
					this.className
				]
			}
		},
		data () {
			return {
				counter: {}
			}
		},
		props: {
			// 起始值
			startValue: {
				type: Number,
				default: 0
			},
			// 最终值
			endValue:{
				type: Number,
				required: true 			// 必选
			},
			// 小数点后保留几位小数
			decimals: {
				type: Number,
				default: 0
			},
			// 动画延迟开始的效果 单位ms
			dalay: {
				type: Number,
				default: 0
			},
			// 渐变时长
			duration: {
				type: Number,
				default: 1
			},
			// 是否使用变数效果
			useEasing: {
				type: Boolean,
				default: false
			},
			// 是否使用分组
			useGrouping: {
				type: Boolean,
				default: true
			},
			// 分组符号
			separator: {
				type: String,
				default: ','
			},
			// 整数和小数分割符号
			decimal: {
				type: String,
				default: '.'
			},
			// 类名
			className: {
				type: String
			}
		},
		watch: {
			// 监听最终值的变化，从而更新最终值
			endValue (newVal, oldVal) {
				this.counter.update(newVal)
				this.emitEndEvent()
			}
		},
		mounted () {
			// 当页面上所有的元素都渲染完成之后
			this.$nextTick(() => {
				this.counter = new CountUP(this.eleId, this.startValue, this.endValue, this.decimals, this.duration, {
					useEasing: this.useEasing,
					useGrouping: this.useGrouping,
					separator: this.separator, 
  					decimal: this.decimal,
				})
				setTimeout(() => {
					this.counter.start()
					this.emitEndEvent()
				}, this.delay)
			})
		},
		methods: {
			// 获取最终显示的数值
			getCount () {
				return this.$refs.number.innerHTML
			},
			emitEndEvent () {
				setTimeout(() => {
					this.$nextTick(() => {
						this.$emit('on-animation-end', Number(this.getCount()))
					})
				}, this.duration * 1000 + 5)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.count-to-number {
		color: pink
	}
</style>
