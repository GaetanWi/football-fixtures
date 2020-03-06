<template>
    <div style="display: flex; justify-content: center; align-items: center;">
        <img style="margin: 15px;" :src="leagueInfos.flag" />
        <span>{{ leagueInfos.name }}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class LeagueBoardHeader extends Vue {

    @Prop() leagueInfos: any;
}
</script>

<style lang="scss" scoped>
</style>