<template>
  <aside>
    <h2 class="visually-hidden">Опции</h2>
    <form action="#">
      <fieldset class="filter-section filter-section--sort">
        <h3>Сортировать</h3>
        <!-- как данные отправляются? name & id -->
        <label for="price-max">
          <input type="radio" name="sort" id="price-max" checked />
          по возрастанию цены</label
        >
        <label for="price-min">
          <input type="radio" name="sort" id="price-min" />
          по убыванию цены</label
        >
        <label for="flight-time">
          <input type="radio" name="sort" id="flight-time" />
          по времени в пути</label
        >
      </fieldset>
      <fieldset class="filter-section">
        <h3>Фильтровать</h3>
        <label for="one-transfer">
          <input type="checkbox" name="filter" id="one-transfer" />
          1 пересадка</label
        >
        <label for="no-transfer">
          <input type="checkbox" name="filter" id="no-transfer" />
          без пересадок</label
        >
      </fieldset>
      <fieldset class="filter-section">
        <h3>Цена</h3>
        <label for="price-limit-min">
          От
          <input type="text" name="price-limit" id="price-limit-min" />
          </label
        >
        <label for="price-limit-max">
          До
          <input type="text" name="price-limit" id="price-limit-max" />
          </label
        >
      </fieldset>
      <fieldset class="filter-section">
        <!-- v-for -->
        <h3>Авиакомпании</h3>
        <label :for="`carrier-${id}`">
          <input type="checkbox" name="carrier" :id="`carrier-${id}`" />
          -- на основании данных --</label
        >
        <label :for="`carrier-${id}`">
          <input type="checkbox" name="carrier" :id="`carrier-${id}`" />
          -- на основании данных --</label
        >
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
