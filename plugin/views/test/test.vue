<template>
    <div class="main-sdk">
        {{msg}}
    </div>
</template>

<script>
	export default {
		name: "test-template",
		data() {
			return {
				msg: '这是一个插件 test'
			}
		}
	}
</script>

<style scoped>
    .main-sdk {
        width: 100%;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
    }
</style>
