<template>
    <div class="home">
        <hello/>
        <router-link to="/404">404</router-link>
        <index/>
    </div>
</template>

<script lang="ts">
    import {index} from '@c/index'
    import hello from '@/components/hello.vue'
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'home',
        components: {hello, index}
    })
    export default class extends Vue {

    }

</script>

<style lang="scss" scoped>
    .home {
        text-align: center;
    }
</style>
