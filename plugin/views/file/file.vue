<template>
    <div class="main-sdk">
        {{msg}}
    </div>
</template>

<script>
	export default {
		name: "file-template",
		data() {
			return {
				msg: '这是一个插件 file'
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
