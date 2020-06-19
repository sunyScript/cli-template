<template>
    <div class="home">
        <hello/>
        <router-link to="/404">404</router-link>
    </div>
</template>

<script lang="ts">
    import hello from '@C/hello.vue'
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'home',
        components: {hello}
    })
    export default class extends Vue {

    }

</script>

<style lang="scss" scoped>
    .home {
        text-align: center;
    }
</style>
