<template>
  <div class="route">
    <div class="route__item route-header">
      <div class="departure-header">
        <!-- выровнять верт -->
        <span class="airport text--main-info">Москва, ШЕРЕМЕТЬЕВО</span>
        <span class="text--info">(SVO)</span>
      </div>
      <div>SVG</div>
      <div class="arrival-header">
        <span class="airport text--main-info">ЛОНДОН, Лондон, ХИТРОУ</span>
        <span class="text--info">(LHR)</span>
      </div>
    </div>
    <div class="route__item route-dates">
      <div class="departure-info">
        <span class="departure__time text--main-info">20:48</span>
        <span class="departure__date text--info">18 авг. вт</span>
      </div>
      <span class="journey-total text--main-info">14 ч 45 мин</span>
      <div class="arrival-info">
        <span class="arrival__date text--info">19 авг ср</span>
        <span class="arrival__time text--main-info">09:25</span>
      </div>
    </div>
    <div class="route-transfers">1 пересадка</div>
    <div class="route__item">
      <span class="carrier-info">Рейс выполняет: LOT Polish Airlines</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightRoute',
};
</script>

<style></style>
