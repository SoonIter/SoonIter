<script setup lang="ts">
import { routes as _routes } from '~/main'

const routes = reactive(_routes.filter((i) => {
  return i.path.startsWith('/posts')
})).map((i) => {
  return {
    path: i.path,
  }
})
</script>

<template>
  <main id="main" h-full md="w-full flex-row justify-center" flex flex-col gap-6>
    <aside md="h-full w-80 bg-opacity-0">
      <ProfileCard />
      <!-- <Back /> -->
    </aside>
    <div md="flex-1" md:max-w-150 flex flex-col gap-4 overflow-y-visible>
      <Tabs />
      <AriticleList />
      <Footer />
    </div>
  </main>
</template>

<style>

</style>

