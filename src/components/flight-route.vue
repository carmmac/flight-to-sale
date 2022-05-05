<template>
  <div class="route">
    <div class="route__item route-header">
      <div class="departure-header">
        <span class="airport text--main-info">{{ getRouteDepartureInfo }}</span>
        <span class="text--info">({{ this.departure.departureAirport.uid }})</span>
      </div>
      <div>SVG</div>
      <div class="arrival-header">
        <span class="airport text--main-info">{{ getRouteArrivalInfo }}</span>
        <span class="text--info">({{ this.arrival.arrivalAirport.uid }})</span>
      </div>
    </div>
    <div class="route__item route-dates">
      <div class="departure-info">
        <span class="departure__time text--main-info">{{
          humanizeDate(this.departure.departureDate, DateFormat.TIME)
        }}</span>
        <span class="departure__date text--info">{{
          humanizeDate(this.departure.departureDate, DateFormat.DATE)
        }}</span>
      </div>
      <span class="journey-total text--main-info">{{ getFlightDuration(this.leg.duration) }}</span>
      <div class="arrival-info">
        <span class="arrival__date text--info">{{
          humanizeDate(this.arrival.arrivalDate, DateFormat.DATE)
        }}</span>
        <span class="arrival__time text--main-info">
          {{ humanizeDate(this.arrival.arrivalDate, DateFormat.TIME) }}
        </span>
      </div>
    </div>
    <div v-if="getRouteTransfersCount > 0" class="route-transfers">
      {{ getRouteTransfers }}
    </div>
    <div class="route__item">
      <span class="carrier-info">Рейс выполняет: {{ this.carrier.caption }}</span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { DateFormat } from '../const';

export default {
  name: 'FlightRoute',
  data() {
    return {
      DateFormat,
      // transfersCount: this.leg.segments.length - 1,
      departure: this.leg.segments[0],
      arrival: this.leg.segments[this.leg.segments.length - 1],
    };
  },
  props: {
    leg: {
      type: Object,
      required: true,
    },
    carrier: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getRouteDepartureInfo() {
      return `
        ${this.departure.departureCity?.caption ?? ''},
        ${this.departure.departureAirport?.caption ?? ''}
      `;
    },
    getRouteArrivalInfo() {
      return `
        ${this.arrival.arrivalCity?.caption ?? ''},
        ${this.arrival.arrivalAirport?.caption ?? ''}
      `;
    },
    getRouteTransfers() {
      if (this.getRouteTransfersCount === 1) {
        return `${this.getRouteTransfersCount} пересадка`;
      }
      if (this.getRouteTransfersCount > 1 && this.getRouteTransfersCount < 5) {
        return `${this.getRouteTransfersCount} пересадки`;
      }
      return `${this.getRouteTransfersCount} пересадок`;
    },
    getRouteTransfersCount() {
      return this.leg.segments.length - 1;
    },
  },
  methods: {
    humanizeDate(dateString, format) {
      return dayjs(dateString).format(format);
    },
    getFlightDuration(duration) {
      const hours = Math.trunc(duration / 60);
      const minutes = duration % 60;
      return `${hours} ч ${minutes} мин`;
    },
  },
};
</script>

<style></style>
