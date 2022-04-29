<template>
  <aside class="filters">
    <h2 class="visually-hidden">Опции</h2>
    <form action="#">
      <fieldset class="filter-section filter-section--sort">
        <h3 class="text--filter-heading">Сортировать</h3>
        <!-- как данные отправляются? name & id -->
        <label class="text--base" for="price-max">
          <input type="radio" name="sort" id="price-max" checked />
          по возрастанию цены</label
        >
        <label class="text--base" for="price-min">
          <input type="radio" name="sort" id="price-min" />
          по убыванию цены</label
        >
        <label class="text--base" for="flight-time">
          <input type="radio" name="sort" id="flight-time" />
          по времени в пути</label
        >
      </fieldset>
      <fieldset class="filter-section">
        <h3 class="text--filter-heading">Фильтровать</h3>
        <label class="text--base" for="one-transfer">
          <input type="checkbox" name="filter" id="one-transfer" />
          1 пересадка</label
        >
        <label class="text--base" for="no-transfer">
          <input type="checkbox" name="filter" id="no-transfer" />
          без пересадок</label
        >
      </fieldset>
      <fieldset class="filter-section">
        <h3 class="text--filter-heading">Цена</h3>
        <label class="text--base" for="price-limit-min">
          От
          <input type="text" name="price-limit" id="price-limit-min" placeholder="0"/>
        </label>
        <label class="text--base" for="price-limit-max">
          До
          <input type="text" name="price-limit" id="price-limit-max" placeholder="10000"/>
        </label>
      </fieldset>
      <fieldset class="filter-section">
        <!-- v-for -->
        <h3 class="text--filter-heading">Авиакомпании</h3>
        <!-- <label class="text--base" :for="`carrier-${id}`">
          <input type="checkbox" name="carrier" :id="`carrier-${id}`" />
          -- на основании данных --</label
        >
        <label class="text--base" :for="`carrier-${id}`">
          <input type="checkbox" name="carrier" :id="`carrier-${id}`" />
          -- на основании данных --</label
        > -->
      </fieldset>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'FilterPanel',
};
</script>

<style></style>
