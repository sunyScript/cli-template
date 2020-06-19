import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
    token: string
    name: string
    avatar: string
}

@Module({dynamic: true, store, name: 'app'})
class User extends VuexModule implements IUserState {
    public token = ''
    public avatar = ''
    public name = ''

    @Mutation
    SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    SET_AVATAR(avatar: string) {
        this.avatar = avatar
    }

    @Mutation
    SET_NAME(name: string) {
        this.name = name
    }



    @Action
    public async Login(payload: { username: string, password: string }) {

    }
}

export const UserModule = getModule(User)
