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
    <button class="btn btn--flight-select">ВЫБРАТЬ</button>
  </article>
</template>

<script>
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
    getTotalPrice() {
      return `${this.route.flight.price.total.amount} \u20BD`;

      // switch (this.flight.price.total.currencyCode) {
      //   case 'RUB':
      //     return `${this.flight.price.total.amount} \u20BD`;
      //   case 'USD':
      //     return `${this.flight.price.rates.totalUsd.amount} \u0024`;
      //   case 'EUR':
      //     return `${this.flight.price.rates.totalEur.amount} \u20AC`;
      //   default:
      //     return '';
      // }
    },
  },
  methods: {
    getLogoSrc() {
      return `http://pics.avs.io/99/36/${this.route.flight.carrier.uid}.png`;
    },
  },
};
</script>

<style></style>
