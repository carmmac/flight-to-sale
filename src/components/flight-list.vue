<template>
  <div class="list-wrapper">
    <!-- <h2 class="visually-hidden">Список предложений</h2> -->
    <ul class="flight-list">
      <flight-card />
    </ul>
    <button class="btn btn--show-more">Показать еще</button>
  </div>
</template>

<script>
import FlightCard from './flight-card.vue';

export default {
  name: 'FlightList',
  components: { FlightCard },
};
</script>
