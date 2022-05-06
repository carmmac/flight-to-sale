<template>
  <div id="app">
    <div class="page">
      <div class="page-wrapper">
        <h1 class="visually-hidden">Агрегатор поиска авиабилетов</h1>
        <div class="page-header">
          <span class="page-header__title">Валюта:</span>
          <select name="currency" id="currency" @change="changeCurrency($event.target.value)">
            <option
              v-for="(item, i) in Currency"
              :value="item"
              :selected="isSelected(item)"
              :key="`currency-${i}`"
            >
              {{ item }}
            </option>
          </select>
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
import { mapActions, mapMutations, mapState } from 'vuex';
import { State } from './store/state';
import { ActionType } from './store/actions';
import { MutationType } from './store/mutations';
import { Currency } from './const';
import FlightList from './components/flight-list.vue';
import FilterPanel from './components/filters/filters-panel.vue';
import LoadingSpinner from './components/loading.vue';

export default {
  name: 'App',
  components: {
    FlightList,
    FilterPanel,
    LoadingSpinner,
  },
  data() {
    return {
      Currency,
    };
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState({
      selectedCurrency: State.CURRENCY,
      isDataLoaded: [State.IS_DATA_LOADED],
    }),
  },
  methods: {
    ...mapActions({
      load: ActionType.FETCH_FLIGHTS,
    }),
    ...mapMutations({
      changeCurrency: MutationType.SET_CURRENCY,
    }),
    isSelected(currency) {
      return currency === this.selectedCurrency;
    },
  },
};
</script>

<style lang="scss">
@import './styles/style.scss';
</style>
