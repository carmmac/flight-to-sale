<template>
  <div id="app">
    <div class="page">
      <div class="page-wrapper">
        <!-- <h1 class="visually-hidden">Агрегатор поиска авиабилетов</h1> -->
        <filter-panel />
        <flight-list />
      </div>
    </div>
  </div>
</template>

<script>
import FlightList from './components/flight-list.vue';
import FilterPanel from './components/filters.vue';

export default {
  name: 'App',
  components: {
    FlightList,
    FilterPanel,
  },
};
</script>

<style lang="scss">
@import './styles/style.scss';
</style>
