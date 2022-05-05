<template>
  <label class="text--base" :for="`sorting-${sortingValue}`">
    <input
      type="radio"
      :name="`sorting-${sortingValue}`"
      :id="`sorting-${sortingValue}`"
      @change="changeSorting(sortingValue)"
      :checked="isChecked"
    />
    {{ sortingLabel }}</label
  >
</template>

<script>
import { MutationType } from '@/store/mutations';
import { mapMutations, mapState } from 'vuex';
import { State } from '@/store/state';

export default {
  name: 'SortingInput',
  props: {
    sortingLabel: {
      type: String,
      required: true,
    },
    sortingValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      currentSorting: State.CURRENT_SORTING,
    }),
    isChecked() {
      return this.currentSorting === this.sortingValue;
    },
  },
  methods: {
    ...mapMutations({
      changeSorting: MutationType.SET_SORTING,
    }),
  },
};
</script>
