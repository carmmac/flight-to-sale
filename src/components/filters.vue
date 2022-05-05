<template>
  <aside class="filters">
    <h2 class="visually-hidden">Опции</h2>
    <div>
      <sorting-bar />
      <filters-transfer />
      <filters-price />
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
    </div>
  </aside>
</template>

<script>
import { GetterType } from '@/store/getters';
import { mapGetters } from 'vuex';
import { CARRIER_LABEL_LENGTH_MAX, Sorting } from '../const';
import SortingBar from './sorting-bar.vue';
import FiltersTransfer from './filters-transfer.vue';
import FiltersPrice from './filters-price.vue';

export default {
  name: 'FilterPanel',
  components: { SortingBar, FiltersTransfer, FiltersPrice },
  data() {
    return {
      sortingOptions: Object.values(Sorting),
    };
  },
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
