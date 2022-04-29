<template>
  <div class="list-wrapper">
    <h2 class="visually-hidden">Список предложений</h2>
    <ul class="flight-list">
      <li class="card" v-for="(flight, i) in visibleFlights" :key="`flight-${i}`">
        <flight-card :route="flight" />
      </li>
    </ul>
    <button v-if="displayLoadMoreButton" class="btn btn--load-more">Показать еще</button>
  </div>
</template>

<script>
import { GetterType } from '@/store/getters';
import { mapGetters } from 'vuex';
import FlightCard from './flight-card.vue';

export default {
  name: 'FlightList',
  components: { FlightCard },
  computed: {
    ...mapGetters({
      totalFlightsNum: GetterType.GET_TOTAL_FLIGHTS_NUM,
      visibleFlights: GetterType.GET_VISIBLE_FLIGHTS,
    }),
    displayLoadMoreButton() {
      return this.visibleFlights.length < this.totalFlightsNum;
    },
  },
};
</script>
