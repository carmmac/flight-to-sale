<template>
  <aside class="filters">
    <h2 class="visually-hidden">Опции</h2>
    <form action="#">
      <fieldset class="filter-section filter-section--sort">
        <h3 class="filter-section__heading text--filter-heading">Сортировать</h3>
        <!-- как данные отправляются? name & id -->
        <label class="text--base" for="price-max">
          <input type="radio" name="sort" id="price-max" checked />
          по возрастанию цены</label
        >
        <label class="text--base" for="price-min">
          <input type="radio" name="sort" id="price-min" />
          по убыванию цены</label
        >
        <label class="text--base" for="flight-time">
          <input type="radio" name="sort" id="flight-time" />
          по времени в пути</label
        >
      </fieldset>
      <fieldset class="filter-section">
        <h3 class="filter-section__heading text--filter-heading">Фильтровать</h3>
        <label class="text--base" for="one-transfer">
          <input type="checkbox" name="filter" id="one-transfer" />
          1 пересадка</label
        >
        <label class="text--base" for="no-transfer">
          <input type="checkbox" name="filter" id="no-transfer" />
          без пересадок</label
        >
      </fieldset>
      <fieldset class="filter-section">
        <h3 class="filter-section__heading text--filter-heading">Цена</h3>
        <label class="text--base" for="price-limit-min">
          От
          <input type="text" name="price-limit" id="price-limit-min" placeholder="0" />
        </label>
        <label class="text--base" for="price-limit-max">
          До
          <input type="text" name="price-limit" id="price-limit-max" placeholder="10000" />
        </label>
      </fieldset>
      <fieldset class="filter-section">
        <h3 class="filter-section__heading text--filter-heading">Авиакомпании</h3>
        <label
          v-for="(carrier, i) in carriers"
          class="text--base"
          :for="`carrier-${i}`"
          :key="`carrier-${i}`"
        >
          <input type="checkbox" name="carrier" :id="`carrier-${i}`" />
          {{ getCarrierLabel(carrier) }}
        </label>
      </fieldset>
    </form>
  </aside>
</template>

<script>
import { GetterType } from '@/store/getters';
import { mapGetters } from 'vuex';
import { CARRIER_LABEL_LENGTH_MAX } from '../const';

export default {
  name: 'FilterPanel',
  computed: {
    ...mapGetters({
      carriers: GetterType.GET_CARRIERS_LIST,
    }),
  },
  methods: {
    getCarrierLabel({ name, price }) {
      if (name && price) {
        return name.length > CARRIER_LABEL_LENGTH_MAX
          ? `${name.slice(0, CARRIER_LABEL_LENGTH_MAX)}... от ${price}`
          : `${name} от ${price}`;
      }
      return '';
    },
  },
};
</script>

<style></style>
