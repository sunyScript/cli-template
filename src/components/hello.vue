<template>
    <div class="hello">
        {{ msg }}
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'hello'
    })
    export default class extends Vue {
        private msg = 'hello'
    }
</script>


<style lang="scss" scoped>
    .hello {
        color: #69958e;
        font-size: 30px;
        font-weight: bold;
        line-height: 200px;
        text-align: center;
    }
</style>

