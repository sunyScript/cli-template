<template>
    <div class="hello">
        <span>{{msg}}</span>
    </div>
</template>

<script>
	export default {
		name: 'hello-plugin',
		data() {
			return {
				msg: '这是插件的组件'
			}
		}
	}
</script>
<style lang="scss" scoped>
    .hello {
        text-align: center;
        color: #633395;
        font-size: 30px;
        font-weight: bold;
        line-height: 100px;
    }
</style>
