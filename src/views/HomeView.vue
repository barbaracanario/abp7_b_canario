<template>
  <div>
    <HeaderComp>Muebles, Decoración y Más</HeaderComp>

    <main class="main-container">
      <section class="product-section" id="cocina">
        <h2 class="section-title">Productos de cocina</h2>
        <ListProducts :products="productsStore.filterProductsByCategory('Cocina')" />
      </section>

      <v-divider :thickness="3" class="divider"></v-divider>

      <section class="product-section" id="hogar">
        <h2 class="section-title">Productos de Hogar</h2>
        <ListProducts :products="productsStore.filterProductsByCategory('Hogar')" />
      </section>

      <v-divider :thickness="3" class="divider"></v-divider>

      <section class="product-section mb-5" id="jardin">
        <h2 class="section-title">Productos de jardín</h2>
        <ListProducts :products="productsStore.filterProductsByCategory('Jardín')" />
      </section>
    </main>
  </div>
</template>

<script setup>
import HeaderComp from '@/components/layouts/HeaderComp.vue';
import ListProducts from '@/components/ListProducts.vue';
import { useProductsStore } from '@/stores/products.store';
import { onMounted } from 'vue';

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.fetchProducts();
});
</script>

<style lang="css" scoped>

.product-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #123152;
  margin: 2rem 0 3rem 0;
  text-align: center;
}

.divider {
  margin: 4rem auto;
  max-width: 90%;
  background: linear-gradient(90deg, transparent, #e9ecef, transparent) !important;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
    margin: 1.5rem 0 2rem 0;
  }
}
</style>
