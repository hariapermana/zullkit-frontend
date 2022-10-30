<script setup>
import { ref } from "vue";

const benefits = ref([
  {
    id: "1",
    icon: "icon-layer.svg",
    title: "Customizable",
    description: "Accelerate your work with our millions",
    addition: "of ready-to-use design projects.",
  },
  {
    id: "2",
    icon: "icon-badge.svg",
    title: "500 Fortune",
    description: "Accelerate your work with our millions",
    addition: "of ready-to-use design projects.",
  },
  {
    id: "3",
    icon: "icon-book.svg",
    title: "Documentation",
    description: "Accelerate your work with our millions",
    addition: "of ready-to-use design projects.",
  },
]);
</script>
<template>
  <div class="mb-12" v-for="benefit in benefits" :key="benefit.id">
    <div class="block mb-2">
      <img
        :src="'/src/assets/img/' + benefit.icon"
        alt=""
        style="display: inline"
      />

      <h3 class="inline-block ml-2 text-lg font-semibold">
        {{ benefit.title }}
      </h3>
    </div>
    <p class="mt-2 text-lg text-gray-500">
      {{ benefit.description }} <br />
      {{ benefit.addition }}
    </p>
  </div>
</template>
