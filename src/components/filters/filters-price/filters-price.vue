<template>
  <fieldset class="filter-section">
    <h3 class="filter-section__heading text--filter-heading">Цена</h3>
    <label class="text--base" for="price-limit-min">
      От
      <input
        type="number"
        name="price-limit"
        id="price-limit-min"
        placeholder="0"
        v-model.number="priceMinValue"
        @keypress="checkNumbersOnly($event)"
        @change="validatePrice($event.target.value)"
      />
    </label>
    <span v-if="!isValid" class="text--input-error">{{ inputError.priceMin }}</span>
    <label class="text--base" for="price-limit-max">
      До
      <input
        type="number"
        name="price-limit"
        id="price-limit-max"
        placeholder="100000"
        v-model.number="priceMaxValue"
        @keydown="checkNumbersOnly($event)"
        @change="validatePrice()"
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
      isValid: true,
      inputError: {
        priceMin: 'Минимальная цена превышает максимальную',
      },
    };
  },
  methods: {
    ...mapMutations({
      setPriceMin: MutationType.SET_PRICE_FILTER_MIN,
      setPriceMax: MutationType.SET_PRICE_FILTER_MAX,
    }),
    checkNumbersOnly(evt) {
      const event = evt || window.event;
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      } else {
        return true;
      }
      return null;
    },
    validatePrice() {
      if (this.priceMinValue > this.priceMaxValue && this.priceMaxValue) {
        this.isValid = false;
      } else {
        this.isValid = true;
        this.setPriceMin(this.priceMinValue);
        this.setPriceMax(this.priceMaxValue);
      }
    },
  },
};
</script>
