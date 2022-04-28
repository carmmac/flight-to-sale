<template>
  <li class="card">
    <!-- вставлять названия городов -->
    <!-- <h3 class="visually-hidden">Перелет</h3> -->
    <article>
      <header class="card__header">
        <div class="card-logo"></div>
        <div class="card-price">
          <span class="card-price__title text--price">21900 P</span>
          <span class="card-price__info text--sub">Стоимость для одного взрослого пассажира</span>
        </div>
      </header>
      <div class="card__body">
        <div class="card__directions">
          <!-- различать -->
          <flight-direction />
          <flight-direction />
        </div>
      </div>
      <button class="btn btn--flight-select">ВЫБРАТЬ</button>
    </article>
  </li>
</template>

<script>
import FlightDirection from './flight-route.vue';

export default {
  name: 'FlightCard',
  components: { FlightDirection },
};
</script>

<style></style>
