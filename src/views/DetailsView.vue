<script setup>
import { useRoute, RouterLink } from "vue-router";
import Gallery from "components/details/Gallery.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";

const route = useRoute();
const userStore = useUserStore();
const user = computed(() => userStore.getUser);
const isLoggedIn = computed(() => userStore.isLoggedIn);
const item = ref(false);

async function itemsDetails() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/products?id=" +
        route.params.id
    );
    item.value = response.data.data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  window.scrollTo(0, 0);
  userStore.fetchUser();
  itemsDetails();
});

const features = computed(() => {
  return item.value.features.split(",");
});
</script>

<template>
  <main v-if="item">
    <div class="container p-2 mx-auto my-10 max-w-7xl">
      <div class="flex flex-row flex-wrap py-4">
        <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1
            class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
          >
            {{ item.name }}
          </h1>
          <p class="text-gray-500">Build your next coin startup</p>
          <Gallery
            :defaultImage="item.thumbnails"
            :galleries="item.galleries"
          />
          <section class="" id="orders">
            <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
            <div class="text-gray-500" v-html="item.description"></div>
          </section>
        </main>
        <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
          <div class="sticky top-0 w-full pt-4 md:mt-24">
            <div class="p-6 border rounded-2xl">
              <div class="mb-4">
                <div class="flex mb-2">
                  <div>
                    <img
                      src="@/assets/img/icon-figma.png"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div class="block mt-1 ml-4">
                    <h3 class="font-semibold text-md">Figma</h3>
                    <p class="text-gray-400 text-md">Project Included</p>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex mb-2">
                  <div>
                    <img
                      src="@/assets/img/icon-sketch.png"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div class="block mt-1 ml-4">
                    <h3 class="font-semibold text-md">Sketch</h3>
                    <p class="text-gray-400 text-md">Project Included</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
                <ul class="mb-6 text-gray-500" v-if="item">
                  <li
                    class="mb-2"
                    v-for="feature in features"
                    :key="feature.name"
                  >
                    {{ feature }}
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-right w-5 mt-1"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div>
                <div v-if="user.data.subscription.length > 0">
                  <a
                    :href="item.file"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Download Now
                  </a>
                </div>
                <div v-else>
                  <RouterLink
                    to="/pricing"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Subscribe
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>
