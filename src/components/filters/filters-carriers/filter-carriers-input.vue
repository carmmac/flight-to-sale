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
    {{ getCarrierLabel(carrierName, carrierPrice) }}
  </label>
</template>

<script>
import { CARRIER_LABEL_LENGTH_MAX } from '@/const';
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
      type: Object,
      required: true,
    },
  },
  computed: {
    trimCarrierLabel() {
      return this.carrierName.length > CARRIER_LABEL_LENGTH_MAX
        ? `${this.carrierName.slice(0, CARRIER_LABEL_LENGTH_MAX)}...`
        : `${this.carrierName}`;
    },
    trimCarrierCurrency() {
      return `${this.carrierPrice.currency[0]}.`;
    },
  },
  methods: {
    getCarrierLabel(name, price) {
      return `
        ${this.trimCarrierLabel}
        от ${price.amount}
        ${this.trimCarrierCurrency}
      `;
    },
    ...mapActions({
      changeCarriersFilter: ActionType.CHANGE_CARRIERS_FILTER,
    }),
  },
};
</script>
