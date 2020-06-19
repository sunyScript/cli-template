import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'

Vue.use(Vuex)

export interface IRootState {
    app: IAppState
}

export default new Vuex.Store<IRootState>({})
