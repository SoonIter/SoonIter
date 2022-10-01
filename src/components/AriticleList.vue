<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
const list = Array.from({ length: 8 }, i => i)
</script>

<template>
  <div flex gap-6 flex-col>
    <ArticleCard v-for="item in list" />
  </div>
</template>
