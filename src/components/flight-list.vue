<template>
  <div class="list-wrapper">
    <div v-if="isDataLoaded">
      <h2 class="visually-hidden">Список предложений</h2>
      <ul class="flight-list">
        <li class="card" v-for="(flight, i) in visibleFlights" :key="`flight-${i}`">
          <flight-card :route="flight" />
        </li>
      </ul>
      <button v-if="displayLoadMoreButton" class="btn btn--load-more">Показать еще</button>
    </div>
    <loading-spinner v-else />
  </div>
</template>

<script>
import { State } from '@/store/state';
import { GetterType } from '@/store/getters';
import { mapGetters, mapState } from 'vuex';
import FlightCard from './flight-card.vue';
import LoadingSpinner from './loading.vue';

export default {
  name: 'FlightList',
  components: { FlightCard, LoadingSpinner },
  computed: {
    ...mapGetters({
      totalFlightsNum: GetterType.GET_TOTAL_FLIGHTS_NUM,
      visibleFlights: GetterType.GET_VISIBLE_FLIGHTS,
    }),
    ...mapState({
      isDataLoaded: [State.IS_DATA_LOADED],
    }),
    displayLoadMoreButton() {
      return this.visibleFlights.length < this.totalFlightsNum;
    },
  },
};
</script>
