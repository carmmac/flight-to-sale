<template>
  <!-- вставлять названия городов -->
  <!-- <h3 class="visually-hidden">Перелет</h3> -->
  <article>
    <header class="card__header">
      <div class="card-logo"></div>
      <div class="card-price">
        <span class="card-price__title text--price">{{ getTotalPrice }}</span>
        <span class="card-price__info text--sub">Стоимость для одного взрослого пассажира</span>
      </div>
    </header>
    <div class="card__body">
      <div class="card__directions">
        <!-- различать -->
        <flight-route
          v-for="(transfer, i) in route.flight.legs"
          :key="`leg-${i}`"
          :transfer="transfer"
          :carrier="route.flight.carrier"
        />
        <!-- <flight-route :flight="route.flight" /> -->
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
      switch (this.route.flight.price.total.currencyCode) {
        case 'RUB':
          return `${this.route.flight.price.total.amount} \u20BD`;
        case 'USD':
          return `${this.route.flight.price.rates.totalUsd.amount} \u0024`;
        case 'EUR':
          return `${this.route.flight.price.rates.totalEur.amount} \u20AC`;
        default:
          return '';
      }
    },
  },
};
</script>

<style></style>
