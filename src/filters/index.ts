export const filterUserLazyImg: Function = (value: string | object) => {
    return {
        src: value,
        error: require('@/assets/img/head.png'),
        loading: require('@/assets/img/loading.gif')
    }
}
