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
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;

    .name {
        margin: 10px;
        text-align: center;
    }

    .team-logo {
        margin: 0 15px;
    }
}

@media (max-width: 550px) {
    .team {width: auto;}
    .team-logo {max-width: 30px;}
}

@media (min-width: 551px) and  (max-width: 750px) {
    .team {width: 20vw;}
}

@media (min-width: 751px) {
    .team {width: 40vw;}
}
</style>