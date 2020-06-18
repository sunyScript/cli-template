<template>
    <div class="home">
        <hello/>
        <router-link to="/404">404</router-link>
    </div>
</template>

<script>
	import hello from '@C/hello'

	export default {
		name: 'Home',
		components: {
			hello
		}
	}
</script>

<style lang="scss" scoped>
    .home {
        text-align: center;
    }
</style>
