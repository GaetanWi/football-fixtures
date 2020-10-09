<template>
    <div v-if="!!lineup && lineup.length > 0">
        <h3>Line-up</h3>
        <div style="display: flex; flex-direction: column;">
            <span v-for="startingPlayer in lineup" :key="startingPlayer.id">
                {{ `${startingPlayer.nm} - ${startingPlayer.n}` }}
            </span>
        </div>

        <h3>Bench</h3>
        <div style="display: flex; flex-direction: column;">
            <span v-for="benchPlayer in bench" :key="benchPlayer.id">
                {{ `${benchPlayer.nm} - ${benchPlayer.n}` }}
            </span>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class TeamLineUp extends Vue {

    @Prop() public lineup!: any;
    @Prop() public bench!: any;
}
</script>

<style lang='scss' scoped>
</style>