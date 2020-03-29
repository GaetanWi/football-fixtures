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

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                    class="no-border-btn"
                    dark
                    v-on="on"
                >
                    <span :class="'flag-icon flag-icon-' + currentLang" />
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="country in availableCountries"
                    :key="country.codeIso"
                    @click="changeLocale(country.codeIso)"
                >
                    <v-list-item-title>
                        <span :class="'flag-icon flag-icon-' + country.codeIso"></span>&nbsp;&nbsp;{{ country.label }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";

import i18n from '@/plugins/i18n';
import Country from '@/models/Country';

@Component
export default class NavBar extends Vue {
    @Prop() public menu!: {display?: boolean};

    public currentLang: string = 'fr';
    public availableCountries: Country[] = [
        new Country('fr', 'France'),
        new Country('gb', 'English'),
    ];

    @Emit("menu-changed") public emitDisplayMenuEvent(menu: {display?: boolean}) {}

    public toggleMenu() {
        this.menu.display = !this.menu.display;
        this.emitDisplayMenuEvent(this.menu);
    }

    public changeLocale(locale: string): void {
        i18n.locale = locale;
        this.currentLang = locale;
    }
}
</script>

<style lang="scss" scoped>
</style>