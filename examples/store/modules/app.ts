import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import store from '@/store'

export interface IAppState {
    menu: boolean
}

@Module({dynamic: true, store, name: 'app'})
class App extends VuexModule implements IAppState {
    public menu = true

    @Mutation
    private SET_MENU(menu: boolean) {
        this.menu = menu
    }
}

export const UserModule = getModule(App)
