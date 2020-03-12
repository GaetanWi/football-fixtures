<template>
    <v-app-bar 
        clipped-left 
        app
        dense 
        dark>
        <v-toolbar-title>
            <v-app-bar-nav-icon @click.stop="toggleMenu()"></v-app-bar-nav-icon>
            <v-icon style="margin: 0 15px;">sports_soccer</v-icon>Football Fixtures
        </v-toolbar-title>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
    @Prop() public menu!: {display?: boolean};

    @Emit("menu-changed") public emitDisplayMenuEvent(menu: {display?: boolean}) {}

    public toggleMenu() {
        this.menu.display = !this.menu.display;
        this.emitDisplayMenuEvent(this.menu);
    }
}
</script>

<style lang="scss" scoped>
</style>