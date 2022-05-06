<template>
  <div id="app">
    <div class="page">
      <div class="page-wrapper">
        <h1 class="visually-hidden">Агрегатор поиска авиабилетов</h1>
        <div class="page-header">
          <currency-selector />
        </div>
        <main v-if="isDataLoaded" class="page-main">
          <filter-panel />
          <flight-list />
        </main>
        <loading-spinner v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { State } from './store/state';
import { ActionType } from './store/actions';
import FlightList from './components/flight-list.vue';
import FilterPanel from './components/filters/filters-panel.vue';
import LoadingSpinner from './components/loading.vue';
import CurrencySelector from './components/currency-selector.vue';

export default {
  name: 'App',
  components: {
    FlightList,
    FilterPanel,
    LoadingSpinner,
    CurrencySelector,
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState({
      isDataLoaded: [State.IS_DATA_LOADED],
    }),
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
