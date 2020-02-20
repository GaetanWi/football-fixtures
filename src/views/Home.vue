<template>
    <div class="match-cards">
        <MatchCard v-for="fixture in dailyFeedData.response.g" :key="fixture.id" 
            :fixture="fixture"/>
        <pre>{{ dailyFeedData }}</pre>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Menu from '@/components/common/Menu.vue';
import MatchCard from '@/components/MatchCard.vue';
import ScorebatService from '@/services/ScorebatService.ts';

// Even though this is a page, it still needs to be defined as a Component. 
// In this definition, we'll list the different components this component is using. 
@Component({
    components: {
        Menu,
        MatchCard,
    }
})
export default class Home extends Vue {

    public dailyFeedData = {}

    // When the component is mounting, i'm Fetching the API to get the Feed data I'm looking for
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
}
</style>