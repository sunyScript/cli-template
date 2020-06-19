<template>
    <div class="hello">
        {{ msg }}
    </div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'hello'
			}
		}
	}
</script>

<style lang="scss" scoped>
    .hello {
        color: #607dc9;
        font-size: 30px;
        font-weight: bold;
        line-height: 200px;
        text-align: center;
    }
</style>

