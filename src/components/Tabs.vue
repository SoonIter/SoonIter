<script setup lang="ts">
await nextTick()
const { t } = useI18n()
const showList = reactive([1, 0])
const currIndex = ref(0)
const [animationPosition] = useToggle(true)
function change(index: number) {
  animationPosition.value = (index > currIndex.value)
  showList.forEach((item, index) => {
    showList[index] = 0
  })
  currIndex.value = index
  showList[index] = 1
}
</script>

<template>
  <div>
    <div h-50px flex flex-row gap-2>
      <div v-for="(item, index) in showList" :key="index" flex flex-col gap-1>
        <div
          text-sm px-2 py-1
          hover="bg-opacity-40 bg-gray"
          cursor-pointer
          rounded-sm
          :text="!item && 'gray'"
          :font="item && 'bold'"
          @click="change(index)"
        >
          {{ t('button.back') }}
        </div>
        <Starport v-if="item" port="tabBar" h-1 w-full>
          <div bg-blue h-1 rd-full />
        </Starport>
      </div>
    </div>
    <Transition :name="`slide-fade-${animationPosition ? 'right' : 'left'}` " mode="out-in">
      <AriticleList v-if="currIndex === 0" />
      <AriticleList v-else-if="currIndex === 1" />
    </Transition>
  </div>
</template>

<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-left-enter-active,
.slide-fade-left-leave-active,
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-left-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.slide-fade-left-leave-to,
.slide-fade-right-enter-from {
  transform: translateX(200px);
  opacity: 0;
}
</style>
