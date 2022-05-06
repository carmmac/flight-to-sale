<template>
  <aside class="filters">
    <h2 class="visually-hidden">Опции</h2>
    <div>
      <sorting-bar />
      <filters-transfer />
      <filters-price />
      <filters-carriers />
    </div>
  </aside>
</template>

<script>
import SortingBar from '../sorting/sorting-panel.vue';
import FiltersTransfer from './filters-transfer/filters-transfer.vue';
import FiltersPrice from './filters-price/filters-price.vue';
import FiltersCarriers from './filters-carriers/filters-carriers.vue';

export default {
  name: 'FilterPanel',
  components: {
    SortingBar,
    FiltersTransfer,
    FiltersPrice,
    FiltersCarriers,
  },
};
</script>
