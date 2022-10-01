<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink class="icon-btn" to="/about" :title="t('button.about')">
    <div i-carbon-dicom-overlay />
  </RouterLink>
</template>
