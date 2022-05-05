<template>
  <label class="text--base" :for="filterTransferName">
    <input
      type="checkbox"
      :name="filterTransferName"
      :id="filterTransferName"
      @change="changeFilter({value: $event.target.checked, filterName: $event.target.name})"
    />
    {{ filterTransferLabel }}</label
  >
</template>

<script>
import { ActionType } from '@/store/actions';
import { mapActions } from 'vuex';

export default {
  name: 'FilterTransferInput',
  props: {
    filterTransferLabel: {
      type: String,
      required: true,
    },
    filterTransferName: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      changeFilter: ActionType.CHANGE_TRANSFER_FILTER,
    }),
  },
};
</script>
