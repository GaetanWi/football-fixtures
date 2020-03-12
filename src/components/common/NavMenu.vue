<template>
    <v-navigation-drawer clipped app v-model="menu.display">
        <v-list dense>
            <template v-for="item in menuItems">
                <!-- Menu items with subMenus -->
                <v-list-group
                    :key="item.text"
                    v-if="!!item.subMenus"
                    v-model="item.toggled"
                    :prepend-icon="item.icon"
                >
                    <template v-slot:activator>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>

                    <v-list-item
                        class="sous-menu"
                        v-for="(child, i) in item.subMenus"
                        :key="i"
                        @click="goToRoute(child.route)"
                    >
                        <v-list-item-action>
                            <v-icon v-if="!!child.icon">{{ child.icon }}</v-icon>
                            <img v-if="!!child.img" :src="child.img" style="max-width: 25px; margin-right: 15px;" />
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ child.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>

                <v-list-item
                    :key="item.text"
                    v-else
                    @click="goToRoute(item.route)"
                    :prepend-icon="item.icon"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class NavMenu extends Vue {
    @Prop() public menu!: { display?: boolean };

    public menuItems: any = [
        {
            icon: 'home',
            text: 'Accueil',
            route: '/'
        },
        {
            icon: 'emoji_events',
            text: 'Championnats',
            toggled: false,
            subMenus: [
                // We're expecting we already know LeagueIds.
                { text: 'FRANCE: Ligue 1', route: '/10/board', img: 'https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/ligue1A.png' },
                { text: 'GERMANY: Bundesliga', route: '/11/board', img: 'https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/bundesliga.png'},
                { text: 'ITALY: Serie A', route: '/13/board', img: 'https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/seriea.png'},
                { text: 'SPAIN: La Liga', route: '/14/board', img: 'https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/laliga.png'},
                { text: 'ENGLAND: Premier League', route: '/15/board', img: 'https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/epl.png'},
            ]
        }
    ];

    public goToRoute(route: string): void {
        if (!!route) {
            this.$router.push(route);
        }
    }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
    box-shadow: 8px 0 8px -10px #000000, -8px 0 8px -10px #000000;
}

.v-list-item-action {
    padding-right: 25px;
}
</style>