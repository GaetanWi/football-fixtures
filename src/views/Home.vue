<template>
    <div>
        <div class="match-cards" v-for="fixture in dailyFeedData.response.g" :key="fixture.id">
            <div class="match-card">
                {{ fixture.s1 }} 
                <span class="score">{{ fixture.sc1 }} - {{fixture.sc2}}</span> 
                {{ fixture.s2 }}
            </div>
        </div>
        <pre>{{ dailyFeedData }}</pre>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Menu from '@/components/common/Menu.vue';
import ScorebatService from '@/services/ScorebatService.ts'

@Component({
    components: {
        Menu,
    }
})
export default class Home extends Vue {

    public dailyFeedData = {}

    public mounted(): void {
        ScorebatService.getDailyFeed().then((response) => this.dailyFeedData = response.data);
    }
}

</script>

<style lang="scss" scoped>
.match-cards {
    display: flex;
    flex-direction: column;
    align-items: center;

    .match-card {
        margin: 15px;
        

        .score {
            color: #fa0020;
        }
    }
}

</style>