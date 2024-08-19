<script>
import {RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
        RouterView
    }
}
</script>

<template>
    <div class="w-full h-screen">
        <NavBar/>
        <RouterView/>
    </div>
</template>

<style>
</style>

