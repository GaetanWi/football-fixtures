<template>
    <div>
        <!-- Just to show how to access route params from template -->
        Id League = {{ $route.params.leagueId }}

        <LeagueBoardHeader :leagueInfos="leagueInfos" />
        <LeagueLeaderBoard :leaderboard="leaderboard" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PropSync } from 'vue-property-decorator';

import ScorebatService from '@/services/ScorebatService';
import LeagueBoardHeader from '@/components/LeagueBoard/LeagueBoardHeader.vue';
import LeagueLeaderBoard from '@/components/LeagueBoard/LeagueLeaderBoard.vue';

@Component({
    components: {
        LeagueBoardHeader,
        LeagueLeaderBoard,
    }
})
export default class LeagueBoard extends Vue {
    public boardData: any = {};

    public leagueInfos = {};
    public leaderboard = {};

    created() {
        ScorebatService.getBoardInfo(this.$route.params.leagueId).then((response) => {
            this.boardData = response.data;

            this.leagueInfos = {
                name: response.data.response.name,
                flag: response.data.response.flag
            };

            this.leaderboard = response.data.response.standings;
        });
    }
}
</script>

<style lang="scss" scoped>
</style>