<template>
  <fieldset class="filter-section filter-section--sort">
    <sorting-input
      v-for="({ label, value }, i) in sortingOptions"
      :key="`sortingOption-${i}`"
      :sortingLabel="label"
      :sortingValue="value"
    />
  </fieldset>
</template>

<script>
import { Sorting } from '@/const';
import SortingInput from './sorting-input.vue';

export default {
  components: { SortingInput },
  name: 'SortingBar',
  data() {
    return {
      sortingOptions: Object.values(Sorting),
    };
  },
};
</script>
