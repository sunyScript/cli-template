<template>
    <div class="notFound">
        <p>404</p>
        <router-link to="/">{{name}} home</router-link>
    </div>

</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {UserModule} from '@/store/modules/user'


    @Component({
        name: 'notFound'
    })
    export default class extends Vue {
        private get name() {
            return UserModule.name
        }

        private setName(value: string) {
            UserModule.SET_NAME(value)
        }

        mounted() {
            setTimeout(()=> this.setName('MYNAME'), 3000)
        }
    }
</script>

<style lang="scss" scoped>
    .notFound {
        text-align: center;

        p {
            color: #4d586a;
            font-size: 30px;
            font-weight: bold;
            line-height: 200px;
        }
    }
</style>
