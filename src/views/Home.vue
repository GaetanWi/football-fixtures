<template>
    <div>
        Home page
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Menu from '@/components/common/Menu.vue';

@Component({
    components: {
        Menu,
    }
})
export default class Home extends Vue {

}

</script>

<style scoped>
</style>