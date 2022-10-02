<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<template>
  <div class="h-auto text-gray-700 dark:text-gray-200 flex flex-col items-center">
    <Header v-show="!isLargeScreen || y > 200" />
    <div h-50px md:display-none />
    <RouterView v-slot="{ Component, route }" h-full px-4 py-8>
      <component :is="Component" :key="route" />
    </RouterView>
    <ScrollToTop />
  </div>
</template>

