<template>
    <div>
        <div v-for="event in events" :key="event.id" class="match-event">
            <div style="width: 45%; text-align: right; padding: 0 15px;">
                <span v-if="event.s === 1" style="padding: 0 10px;">{{ `${event.n} ${ event.t === 'og' ? '(csc)' : ''}` }}</span>
                <v-icon v-if="event.s === 1 && event.t === 'og'" color="red">sports_soccer</v-icon>
                <v-icon v-if="event.s === 1 && event.t === 'goal'">sports_soccer</v-icon> 
                <v-icon v-if="event.s === 1 && event.t === 'yc'" color="yellow">insert_drive_file</v-icon> 
            </div>
            <div style="width: 5%">
                {{ event.m }}'
            </div>
            <div style="width: 45%;">
                <v-icon v-if="event.s === 2 && event.t === 'og'" color="red">sports_soccer</v-icon> 
                <v-icon v-if="event.s === 2 && event.t === 'goal'">sports_soccer</v-icon> 
                <v-icon v-if="event.s === 2 && event.t === 'yc'" color="yellow">insert_drive_file</v-icon> 
                <span v-if="event.s === 2" style="padding: 0 10px;">{{ `${event.n} ${ event.t === 'og' ? '(csc)' : ''}` }}</span>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Events extends Vue {
    @Prop() public events!: Array<any>;
}
</script>

<style lang='scss' scoped>
.match-event { 
    display: flex;
    height: 50px;
    flex-direction: row;
    justify-content: center;
}
</style>