import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
// import CountTo from '_c/count-to'
if (process.env.NODE_ENV !== 'production') {
  // 当前环境为生产环境的时候，不引入mock
  require('./mock')
}
import Mock from './mock'
Vue.config.productionTip = false
Vue.prototype.$bus = Bus


const handleClick = event => {
	console.log(event)
	event.stopPropagation()
}

let list = [{name: 'suncheng'}, {name: 'ceshi'}]
const getLiEleArr = (h) => {
	return list.map((item, index) => h('li',{
		on: {
			click: handleClick
		},
		key: `list_item_${index}`
	}, item.name))
}



new Vue({
  router,
  store,
//   render: h => {
// 		return h(CountTo,{
// 			'class': [],
// 			attrs: {},
// 			style: {},
// 			props: {
// 				endValue: 200
// 			},
// 			domProps: {
// 				innerHTML: '123'
// 			},
// 			on: {
// 				'on-animation-end': (val) => {
// 					console.log('on-animation-end')
// 				}
// 			},
// 			nativeOn: {
// 				'click': () => {
// 					console.log('click')
// 				}
// 			},
// 			directives: [],
// 			scopedSlots: {},
// 			slot:'',
// 			key:'',
// 			ref: ''
// 		})
// 	}
		// render: h => h('div', [
		// 	h('ul',{
		// 		on: {
		// 			click: handleClick
		// 		}
		// 	}, getLiEleArr(h))
		// ])
		render: h => h(App)
}).$mount('#app')
