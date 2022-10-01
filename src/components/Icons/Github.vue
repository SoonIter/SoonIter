<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a
    class="icon-btn" rel="noreferrer" href="https://github.com/sooniter" target="_blank"
    :title="t('button.github')"
  >
    <div i-carbon-logo-github />
  </a>
</template>
