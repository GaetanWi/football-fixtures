<template>
    <div class="match-card">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <div class="header-content">
                        <div class="team-name first-team-name">
                            {{ fixture.s1 }}
                            <img class="team-logo" 
                            :src="`https://s3.amazonaws.com/bookmkrs/img/logos/mini/${fixture.s1Id}.png`" />
                        </div>
                        <div class="date-or-score">
                            <div class="not-started" v-if="fixture.s === '-'">
                                <div class="score-line">
                                    <v-icon>alarm</v-icon>
                                </div>
                                <div class="sub-score-line">
                                    {{ new Date(fixture.dt * 1000).getHours() }} : {{ new Date(fixture.dt * 1000).getMinutes().toString().padStart(2,0) }}</div>
                            </div>
                            <div class="on-going" v-else-if="fixture.s !== 'FT'">
                                <div class="score-line">
                                    {{ fixture.sc1 }} - {{ fixture.sc2 }}
                                </div>
                                <div class="sub-score-line">

                                </div>
                            </div>

                            <div class="over" v-else>
                                <div class="score-line">
                                    {{ fixture.sc1 }} - {{ fixture.sc2 }}
                                </div>
                                <div class="sub-score-line">
                                    TER
                                </div>
                            </div>
                        </div>
                        <div class="team-name second-team-name">
                            <img class="team-logo" 
                            :src="`https://s3.amazonaws.com/bookmkrs/img/logos/mini/${fixture.s2Id}.png`" />
                            {{ fixture.s2 }}
                        </div>
                    </div>
                    <!-- Workaround -->
                    <template v-slot:actions>
                        <v-icon color="primary">keyboard_arrow_down</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content></v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
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

            .team-name {
                width: 200px;
                display: flex; 
                align-items: center;
                max-width: 250px;

                &.first-team-name {
                    justify-content: flex-end;
                }

                .team-logo {
                    margin: 0 15px;
                    max-height: 50px;
                }
            }
            
            .date-or-score {
                display: flex;
                max-width: 50px;
                font-weight: bold;

                .score-line {
                    font-size: 1.5em;

                    .v-icon {
                        font-size: 1.5em;
                    }
                }

                .sub-score-line {
                    font-size: 0.7em;
                }

                .not-started {
                    color: #757575
                }

                .on-going .score-line {
                    color: #fa0020;
                }

                .over {
                    color: darkgrey
                }
            }
        }
        
    }

}
</style>