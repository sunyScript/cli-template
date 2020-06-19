<template>
    <div class="home">
        {{msg}}
        <hello/>
    </div>
</template>

<script>
	import {global} from '../index'
	import hello from '../components/hello'
	export default {
		name: 'index',
        components: {
			hello
        },
		data() {
			return {
				msg: '这是插件'
			}
		}
	}
</script>
<style lang="scss" scoped>
    .home {
        text-align: center;
        color: #953949;
        font-size: 30px;
        font-weight: bold;
        line-height: 100px;
    }
</style>
