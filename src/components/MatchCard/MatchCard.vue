<template>
    <div class="match-card">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <div class="header-content">
                        <Team class="team" :name="fixture.s1" :id="fixture.s1Id" />
                        <ScorePlaceHolder :fixture="fixture" />
                        <Team class="team" :name="fixture.s2" :id="fixture.s2Id" />
                    </div>
                    <!-- Workaround -->
                    <template v-slot:actions>
                        <v-icon color="primary">keyboard_arrow_down</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <!-- You could add whatever you want in here -->
                    One day, I'll add something there. But not today!
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Team from "@/components/MatchCard/MatchCardContent/Team.vue";
import ScorePlaceHolder from "@/components/MatchCard/MatchCardContent/ScorePlaceHolder.vue";

@Component({
    components: {
        Team,
        ScorePlaceHolder
    }
})
export default class MatchCard extends Vue {
    @Prop() fixture: any;
}
</script>

<style lang="scss" scoped>
.match-card {
    display: flex;
    width: 80%;
    margin: 15px;

    .v-expansion-panel-header {
        .header-content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
             
            .team {
                width: 30%
            }
        }
    }
}
</style>

