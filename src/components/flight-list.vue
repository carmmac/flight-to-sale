<template>
  <div class="list-wrapper">
    <h2 class="visually-hidden">Список предложений</h2>
    <ul class="flight-list">
      <li class="card" v-for="(flight, i) in getFlightsPerPage" :key="`flight-${i}`">
        <flight-card :route="flight" />
      </li>
    </ul>
    <button v-if="displayLoadMoreButton" class="btn btn--load-more">Показать еще</button>
  </div>
</template>

<script>
import { CARDS_PER_PAGE_LIMIT } from '@/const';
import { State } from '@/store/state';
import { GetterType } from '@/store/getters';
import { mapGetters, mapState } from 'vuex';
import FlightCard from './flight-card.vue';

export default {
  name: 'FlightList',
  components: { FlightCard },
  computed: {
    ...mapState({
      currentSorting: State.CURRENT_SORTING,
    }),
    ...mapGetters({
      totalFlightsNum: GetterType.GET_TOTAL_FLIGHTS_NUM,
      visibleFlights: GetterType.GET_VISIBLE_FLIGHTS,
    }),
    getFlightsPerPage() {
      return this.visibleFlights.slice(0, CARDS_PER_PAGE_LIMIT);
    },
    displayLoadMoreButton() {
      return this.visibleFlights.length > CARDS_PER_PAGE_LIMIT;
    },
  },
};
</script>
