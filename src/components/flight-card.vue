<template>
  <article>
    <h3 class="visually-hidden">Перелет</h3>
    <header class="card__header">
      <img :src="getLogoSrc()" class="card-logo" alt="Carrier logo" />
      <div class="card-price">
        <span class="card-price__title text--price">{{ getTotalPrice }}</span>
        <span class="card-price__info text--sub">Стоимость для одного взрослого пассажира</span>
      </div>
    </header>
    <div class="card__body">
      <div class="card__directions">
        <flight-route
          v-for="(leg, i) in route.flight.legs"
          :key="`leg-${i}`"
          :leg="leg"
          :carrier="route.flight.carrier"
        />
      </div>
    </div>
    <button class="btn btn--flight-select" @click="selectFlight(route)">ВЫБРАТЬ</button>
  </article>
</template>

<script>
import { Currency } from '@/const';
import { getFlightPriceParam } from '@/utils';
import { ActionType } from '@/store/actions';
import { State } from '@/store/state';
import { mapActions, mapState } from 'vuex';
import FlightRoute from './flight-route.vue';

export default {
  name: 'FlightCard',
  components: { FlightRoute },
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      selectedCurrency: State.CURRENCY,
    }),
    getCurrencySymbol() {
      switch (this.selectedCurrency) {
        case Currency.RUB.CURRENCY_CODE:
          return Currency.RUB.SYMBOL;
        case Currency.EUR.CURRENCY_CODE:
          return Currency.EUR.SYMBOL;
        case Currency.USD.CURRENCY_CODE:
          return Currency.USD.SYMBOL;
        default:
          return '';
      }
    },
    getTotalPrice() {
      return this.selectedCurrency === Currency.RUB.CURRENCY_CODE
        ? `${getFlightPriceParam(this.selectedCurrency, this.route.flight)} ${this.getCurrencySymbol}`
        : `${this.getCurrencySymbol}${getFlightPriceParam(this.selectedCurrency, this.route.flight)}`;
    },
  },
  methods: {
    getLogoSrc() {
      return `http://pics.avs.io/99/36/${this.route.flight.carrier.airlineCode}.png`;
    },
    ...mapActions({
      selectFlight: ActionType.SELECT_FLIGHT,
    }),
  },
};
</script>

<style></style>
