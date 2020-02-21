<template>
    <div class="team">
        <div class="name">{{ name }}</div>
        <div>
            <img
                class="team-logo"
                :src="`https://s3.amazonaws.com/bookmkrs/img/logos/mini/${id}.png`"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Team extends Vue {
    @Prop() name!: string;
    @Prop() id!: number;
}
</script>

<style lang="scss" scoped>
.team {
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;

    .name {
        margin: 10px;
    }

    .team-logo {
        margin: 0 15px;
        max-width: 50px;
    }
}
</style>