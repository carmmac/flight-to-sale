<template>
  <div id="app">
    <div class="page">
      <div class="page-wrapper">
        <h1 class="visually-hidden">Агрегатор поиска авиабилетов</h1>
        <filter-panel />
        <flight-list />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ActionType } from './store/actions';
import FlightList from './components/flight-list.vue';
import FilterPanel from './components/filters.vue';

export default {
  name: 'App',
  components: {
    FlightList,
    FilterPanel,
  },
  created() {
    this.load();
  },
  methods: {
    ...mapActions({
      load: ActionType.FETCH_FLIGHTS,
    }),
  },
};
</script>

<style lang="scss">
@import './styles/style.scss';
</style>
