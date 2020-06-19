export const filterUserLazyImg = (value) => {
	return {
		src: value,
		error: require('@/assets/img/head.png'),
		loading: require('@/assets/img/loading.gif')
	}
}
