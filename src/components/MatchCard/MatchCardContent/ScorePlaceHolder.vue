<template>
    <div class="date-or-score">
        <!-- Not Started Yet-->
        <div class="not-started" v-if="fixture.s === '-'">
            <div class="score-line">
                <v-icon>alarm</v-icon>
            </div>
            <div
                class="sub-score-line"
            >{{ new Date(fixture.dt * 1000).getHours() }} : {{ new Date(fixture.dt * 1000).getMinutes().toString().padStart(2,0) }}</div>
        </div>
        <!-- Postponed -->
        <div class="not-over" v-else-if="fixture.s === 'Pst'">
            <div class="score-line"></div>
            <div class="sub-score-line">{{ $t('fixture.postponned_shortened')}}</div>
        </div>
        <!-- Full Time -->
        <div class="over" v-else-if="fixture.s === 'FT'">
            <div class="score-line">{{ fixture.sc1 }} - {{ fixture.sc2 }}</div>
            <div class="sub-score-line">{{ $t('fixture.fulltime_shortened')}}</div>
        </div>
        <!-- On Going -->
        <div class="on-going" v-else>
            <div class="score-line">{{ fixture.sc1 }} - {{ fixture.sc2 }}</div>
            <div class="sub-score-line">
                <div v-if="fixture.s === 'HT'">{{ $t('fixture.halftime_shortened') }}</div>
            </div>
        </div>        
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class ScorePlaceHolder extends Vue {
    @Prop() fixture!: any;
}
</script>

<style lang="scss" scoped>
.date-or-score {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 50px;
    font-weight: bold;

    .score-line {

        .v-icon {
            font-size: 2em;
        }
    }

    .sub-score-line {
        font-size: 0.7em;
    }

    .not-started {
        color: #757575;
    }

    .on-going .score-line {
        color: #9a3a44;
    }

    .over {
        color: darkgrey;
    }
}

@media (max-width: 750px) {
    .score-line {font-size: 0.7em;}
}

@media (min-width: 751px) {
    .score-line {font-size: 1.5em;}
    .team {width: 40vw;}
}
</style>