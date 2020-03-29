<template>
    <v-app id="app">
        <NavBar :menu="menu" @menu-changed="updateMenu" />
        <NavMenu :menu="menu" />

        <v-content>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/common/NavBar.vue";
import NavMenu from "@/components/common/NavMenu.vue";

@Component({
    components: {
        NavBar,
        NavMenu
    }
})
export default class App extends Vue {
    public menu: { display?: boolean } = { display: false };

    public updateMenu(menu: { display?: boolean }) {
        this.menu = Object.assign({}, menu);
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
