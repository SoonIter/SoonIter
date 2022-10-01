<script setup lang="ts">
</script>

<template>
  <div card md="shadow-none bg-none h-60 w-80 top-0 left-0" w-full>
    <div flex md:flex-col>
      <Avatar w-16 h-16 />
      <div ml-4 md:ml-0 break-normal flex-1>
        <p text-bold text-6>
          {{ config.nickname }}
        </p>
        <p font-100 text-sm>
          {{ config.description }}
        </p>
      </div>
    </div>
    <IconButtons v-show="isLargeScreen" text-center />
  </div>
</template>

<style>

</style>
