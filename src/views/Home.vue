<template>
    <div>
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

<style scoped>


</style>