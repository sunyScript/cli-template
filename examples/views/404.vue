<template>
    <div class="notFound">
        <p>404</p>
        <router-link to="/">home</router-link>
    </div>

</template>

<script>
	export default {
		name: "notFound"
	}
</script>

<style lang="scss" scoped>
    .notFound {
        text-align: center;
        p {
            color: #52ff5c;
            font-size: 30px;
            font-weight: bold;
            line-height: 200px;
        }
    }
</style>
