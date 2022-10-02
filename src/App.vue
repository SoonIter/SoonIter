<script setup lang="ts">
import { StarportCarrier } from 'vue-starport'
// mport { OverlayScrollbars } from 'overlayscrollbars'

// import 'overlayscrollbars/overlayscrollbars.css'
// OverlayScrollbars(document.body, {
//   overflow: {
//     x: 'hidden',
//   },
// })
useHead({
  title: 'Vitesse - sooniter',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#000' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <StarportCarrier>
    <RouterView v-slot="{ Component, route }">
      <Transition name="bounce">
        <component :is="Component" :key="route" />
      </Transition>
    </RouterView>
  </StarportCarrier>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes bounce-in {
  from {
    transform: translateX(500px);
  }

  to {
    transform: translateX(0);
  }
}
</style>
