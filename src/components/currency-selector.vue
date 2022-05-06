<template>
  <div>
    <span class="page-header__title">Валюта:</span>
    <select name="currency" id="currency" @change="changeCurrency($event.target.value)">
      <option
        v-for="({ CURRENCY_CODE }, i) in currencyOptions"
        :value="CURRENCY_CODE"
        :selected="isSelected(CURRENCY_CODE)"
        :key="`currency-option-${i}`"
      >
        {{ CURRENCY_CODE }}
      </option>
    </select>
  </div>
</template>

<script>
import { Currency } from '@/const';
import { mapMutations, mapState } from 'vuex';
import { State } from '@/store/state';
import { MutationType } from '@/store/mutations';

export default {
  name: 'CurrencySelector',
  data() {
    return {
      currencyOptions: Object.values(Currency),
    };
  },
  computed: {
    ...mapState({
      selectedCurrency: State.CURRENCY,
    }),
  },
  methods: {
    ...mapMutations({
      changeCurrency: MutationType.SET_CURRENCY,
    }),
    isSelected(currency) {
      return currency === this.selectedCurrency;
    },
  },
};
</script>
