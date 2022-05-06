<template>
  <fieldset class="filter-section">
    <h3 class="filter-section__heading text--filter-heading">Цена</h3>
    <label class="text--base" for="price-limit-min">
      От
      <input
        type="text"
        name="price-limit"
        id="price-limit-min"
        placeholder="0"
        v-model.lazy="priceMinValue"
        @change="setPriceMin(priceMinValue)"
      />
    </label>
    <label class="text--base" for="price-limit-max">
      До
      <input
        type="text"
        name="price-limit"
        id="price-limit-max"
        placeholder="100000"
        v-model.lazy="priceMaxValue"
        @change="setPriceMax(priceMaxValue)"
      />
    </label>
  </fieldset>
</template>

<script>
import { MutationType } from '@/store/mutations';
import { mapMutations } from 'vuex';

export default {
  name: 'FiltersPrice',
  data() {
    return {
      priceMinValue: '',
      priceMaxValue: '',
    };
  },
  methods: {
    ...mapMutations({
      setPriceMin: MutationType.SET_PRICE_FILTER_MIN,
      setPriceMax: MutationType.SET_PRICE_FILTER_MAX,
    }),
  },
};
</script>
