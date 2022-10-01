<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink class="icon-btn" to="/" :title="t('button.home')">
    <div i-carbon-assembly />
  </RouterLink>
</template>
