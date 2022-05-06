<template>
  <div class="list-wrapper">
    <h2 class="visually-hidden">Список предложений</h2>
    <ul v-if="getFlightsPerPage.length > 0" class="flight-list">
      <li class="card" v-for="(flight, i) in getFlightsPerPage" :key="`flight-${i}`">
        <flight-card :route="flight" />
      </li>
    </ul>
    <div v-else>По Вашему запросу ничего не найдено</div>
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
      flightsToRender: GetterType.GET_VISIBLE_FLIGHTS,
    }),
    getFlightsPerPage() {
      return this.flightsToRender.slice(0, CARDS_PER_PAGE_LIMIT);
    },
    displayLoadMoreButton() {
      return this.flightsToRender.length > CARDS_PER_PAGE_LIMIT;
    },
  },
};
</script>
