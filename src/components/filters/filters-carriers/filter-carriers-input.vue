<template>
  <label class="text--base" :for="carrierName">
    <input
      type="checkbox"
      :name="carrierName"
      :id="carrierName"
      @change="changeCarriersFilter({
        carrierName: carrierName,
        value: $event.target.checked
      })"
    />
    {{ getCarrierLabel(carrierPrice) }}
  </label>
</template>

<script>
import { CARRIER_LABEL_LENGTH_MAX, Currency, RUB_SHORTHAND } from '@/const';
import { mapActions } from 'vuex';
import { ActionType } from '@/store/actions';

export default {
  name: 'FilterCarriersInput',
  props: {
    carrierName: {
      type: String,
      required: true,
    },
    carrierPrice: {
      type: String,
      required: true,
    },
    carrierCurrency: {
      type: String,
      required: true,
    },
  },
  computed: {
    trimCarrierLabel() {
      return this.carrierName.length > CARRIER_LABEL_LENGTH_MAX
        ? `${this.carrierName.slice(0, CARRIER_LABEL_LENGTH_MAX)}...`
        : `${this.carrierName}`;
    },
    getCarrierCurrency() {
      switch (this.carrierCurrency) {
        case Currency.RUB.CURRENCY_CODE:
          return RUB_SHORTHAND;
        case Currency.EUR.CURRENCY_CODE:
        case Currency.USD.CURRENCY_CODE:
          return this.carrierCurrency;
        default:
          return '';
      }
    },
  },
  methods: {
    getCarrierLabel(price) {
      return `
        ${this.trimCarrierLabel}
        от ${price}
        ${this.getCarrierCurrency}
      `;
    },
    ...mapActions({
      changeCarriersFilter: ActionType.CHANGE_CARRIERS_FILTER,
    }),
  },
};
</script>
