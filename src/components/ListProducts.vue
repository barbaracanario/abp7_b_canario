<template>
  <div class="product-grid">
    <div v-for="product in products" :key="product.id" class="product-card-wrapper">
      <ProductCard :product="product" :isFavorite="favorites.includes(product.id)" @toggleFavorite="toggleFavorite" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import ProductCard from './ProductCard.vue';

defineProps(["products"]);

const favorites = ref([]);

const toggleFavorite = (productId) => {
  const index = favorites.value.indexOf(productId);
  if (index > -1) {
    favorites.value.splice(index, 1);
  } else {
    favorites.value.push(productId);
  }
};
</script>

<style lang="scss" scoped>
.product-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 1rem 0;
  max-width: 1400px;
  margin: 0 auto;
  align-items: stretch;
}

.product-card-wrapper {
  display: flex;
  height: 100%;
}
</style>
