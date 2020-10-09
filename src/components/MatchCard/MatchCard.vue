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
                    <div v-if="matchData" style="display: flex; flex-direction: row; justify-content: center;">
                        <TeamLineUp :lineup="matchData.l1" :bench="matchData.b1" style="width:30%"/>
                        <Events :events="matchData.ev" style="width: 30%;"/>
                        <TeamLineUp :lineup="matchData.l2" :bench="matchData.b2" style="width:30%"/>
                    </div>
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
import TeamLineUp from '@/components/MatchCard/MatchCardContent/TeamLineUp.vue';
import Events from '@/components/MatchCard/MatchCardContent/Events.vue';

import ScorebatService from '@/services/ScorebatService';

@Component({
    components: {
        Team,
        ScorePlaceHolder,
        TeamLineUp,
        Events
    }
})
export default class MatchCard extends Vue {
    @Prop() fixture: any;

    public matchData: any = {};

    public mounted() {
        ScorebatService.getMatchData(this.fixture.s1, this.fixture.s2)
        .then((response: any) => this.matchData = response.data.response);
    }
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

