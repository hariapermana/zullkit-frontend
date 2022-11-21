<script setup>
import { onMounted, computed } from "vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";

import Auth from "./Auth.vue";
import UserInfo from "./UserInfo.vue";

const userStore = useUserStore();
const user = computed(() => userStore.getUser);
const isLoggedIn = computed(() => userStore.isLoggedIn);

onMounted(() => {
  userStore.fetchUser();
});
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <RouterLink to="/" class="flex items-center">
        <img
          src="@/assets/img/logo.svg"
          class="h-8 ml-3 sm:ml-0 sm:h-8"
          alt="Zullkit Logo"
        />
      </RouterLink>
      <UserInfo v-if="isLoggedIn" :user="user.data" />
      <Auth v-else />
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li>
            <a
              href="/categories"
              class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Categories</a
            >
          </li>
          <li>
            <a
              href="/pricing"
              class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Pricing</a
            >
          </li>
          <li>
            <RouterLink
              to="/"
              class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Study Case</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
