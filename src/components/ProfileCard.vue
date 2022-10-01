<script setup lang="ts">
</script>

<template>
  <div card md="shadow-none bg-none h-60 w-80 top-0 left-0" w-full>
    <div flex md:flex-col>
      <Avatar w-16 h-16 />
      <div ml-4 md:ml-0 break-normal flex-1 break-all>
        <p text-bold text-6>
          SoonIter
        </p>
        <p text-sm>
          1231231231231231122312312312312w wefewf312312312312312312312312312312121abcsjdfljflkwefjoje
          312313213wfwfwfewf
        </p>
      </div>
    </div>
    <IconButtons v-show="isLargeScreen" text-center />
  </div>
</template>

<style>

</style>
