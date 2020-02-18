<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Menu from '@/components/common/Menu.vue';

@Component({
  components: {
    Menu,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
