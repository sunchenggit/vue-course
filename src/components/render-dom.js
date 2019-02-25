export default {
	functional: true,
	props: {
		name: String,
		renderFunc: Function
	},
	render: (h, ctx) => {
		return xtc.props.renderFunc(h, name)
	}
}