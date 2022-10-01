<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <RouterView />
  <div>
    <button btn text-sm m="3 t8" @click="router.back()">
      {{ t('button.back') }}
    </button>
  </div>
</template>
