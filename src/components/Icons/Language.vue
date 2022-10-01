<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <a class="icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales()">
    <div i-carbon-language />
  </a>
</template>
