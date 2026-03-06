<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <img :src="product.image" class="product-image" :alt="product.name">
    </div>
    <div class="product-body">
 <i 
    :class="['fa-heart', isFavorite ? 'fa-solid text-danger' : 'fa-regular']"
    style="color: rgb(30, 48, 80); cursor: pointer;"
    @click="toggleFavorite"
    title="Agregar a favoritos"
  ></i>      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-price"> ${{ product.price.toLocaleString() }} </p>
      <p class="product-desc">{{ truncateDescription(product.description) }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggleFavorite']);

const toggleFavorite = () => {
  emit('toggleFavorite', props.product.id);
};

const truncateDescription = (desc) => {
  return desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
};
</script>

<style lang="css" scoped>
.product-card {
  height: 100%;
  min-height: 440px;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.product-image-wrapper {
  height: 280px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-body {
  padding: 1.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #123152;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  margin: 0;
}

.product-desc {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
}

.fa-heart {
  display: flex;
  justify-content: flex-end;
  transform: translatey(30px);
  font-size: 1.25rem;
}
</style>
