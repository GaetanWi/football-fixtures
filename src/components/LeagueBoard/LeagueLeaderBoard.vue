<template>
    <div>
        <v-simple-table>
            <thead>
                <tr>
                    <th class="text-left">{{ $t('board.ranking') }}</th>
                    <th class="text-left">{{ $t('team.name') }}</th>
                    <th class="text-left">{{ $t('board.played') }}</th>
                    <th class="text-left">{{ $t('board.wins')}}</th>
                    <th class="text-left">{{ $t('board.draws')}}</th>
                    <th class="text-left">{{ $t('board.loss') }}</th>
                    <th class="text-left">{{ $t('board.points') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in leaderboard.rows" :key="row.team">
                    <td>{{ row.row }}</td>
                    <td style="display: flex; flex-direction: row; align-items: center;">
                        <div>
                        <img
                            class="team-logo"
                            :src="`https://s3.amazonaws.com/bookmkrs/img/logos/mini/${row.teamScId}.png`"
                        />
                        </div>
                        <div>
                            {{ row.team }}
                        </div>
                    </td>
                    <td>{{ row.p }}</td>
                    <td>{{ row.w }}</td>
                    <td>{{ row.d }}</td>
                    <td>{{ row.l }}</td>
                    <td>{{ row.pnt }}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

@Component
export default class LeagueLeaderBoard extends Vue {
    @Prop() leaderboard: any;
}
</script>

<style lang="scss" scoped>
.text-left {
    text-align: left;
}

.team-logo {
    margin: 0 15px;
    max-width: 20px;
}
</style>