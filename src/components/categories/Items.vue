<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import ItemsCard from "components/Homepage/ItemsCard.vue";
import axios from "axios";

const route = useRoute();
const items = ref([]);
const category = ref([]);

onMounted(() => {
  itemsData();
});

async function itemsData() {
  try {
    const response = await axios.get(
      "http://zullkit-backend.buildwithangga.id/api/categories?id=" +
        route.params.id
    );
    items.value = response.data.data.products;
    category.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
}
</script>
<template>
  <main>
    <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
        {{ category.name }}
      </h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemsCard
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :description="item.subtitle"
          :image="item.thumbnails"
        />
      </div>
    </div>
  </main>
</template>
