<template>
  <fieldset class="filter-section">
    <h3 class="filter-section__heading text--filter-heading">Авиакомпании</h3>

    <filter-carriers-input
      v-for="({ name, price, currency }, i) in carriers"
      :v-if="name && price"
      :key="`filter-carriers-input-${i}`"
      :carrierName="name"
      :carrierPrice="price"
      :carrierCurrency="currency"
    />
  </fieldset>
</template>

<script>
import { GetterType } from '@/store/getters';
import { mapGetters } from 'vuex';
import FilterCarriersInput from './filter-carriers-input.vue';

export default {
  name: 'FiltersCarriers',
  components: { FilterCarriersInput },
  computed: {
    ...mapGetters({
      carriers: GetterType.GET_CARRIERS_LIST,
    }),
  },
};
</script>
