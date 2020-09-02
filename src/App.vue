<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path"/>
        </transition>
    </div>
</template>

<style lang="scss">
    .fade-enter {
        opacity: 0;
        transform: translateX(30px);
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-enter-active {
        transition: opacity .1s;
    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity .15s;
    }
</style>
