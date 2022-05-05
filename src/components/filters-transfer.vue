<template>
  <fieldset class="filter-section">
    <h3 class="filter-section__heading text--filter-heading">Фильтровать</h3>
    <filter-transfer-input
      v-for="({ label, name }, i) in filterTransferOptions"
      :key="`filter-transfer-input-${i}`"
      :filterTransferLabel="label"
      :filterTransferName="name"
    />
  </fieldset>
</template>

<script>
import { mapActions } from 'vuex';
import { ActionType } from '@/store/actions';
import { Filter } from '@/const';
import FilterTransferInput from './filter-transfer-input.vue';

export default {
  name: 'FiltersTransfers',
  components: { FilterTransferInput },
  data() {
    return {
      filterTransferOptions: Object.values(Filter.TRANSFERS),
    };
  },
  methods: {
    ...mapActions({
      changeFilter: ActionType.CHANGE_TRANSFER_FILTER,
    }),
  },
};
</script>
