<template>
    <div class="match-card">
        {{ fixture.s1 }}
        <span class="score">{{ fixture.sc1 }} - {{ fixture.sc2 }}</span>
        {{ fixture.s2 }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class MatchCard extends Vue {

    @Prop() fixture: any;
}
</script>

<style lang="scss" scoped>
.match-card {
    margin: 15px;

    .score {
        color: #fa0020;
    }
}
</style>