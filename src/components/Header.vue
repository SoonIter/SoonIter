<script setup lang="ts">
</script>

<template>
  <Transition name="fade">
    <header
      id="header" bg="#f5f5f520" dark="bg-#333333 border-dark border-b" flex
      justify-between items-center
    >
      <section flex gap-2 text-5>
        <Home />
        <About />
      </section>
      <section id="header-tabs">
        <div />
      </section>
      <section flex gap-2 text-5>
        <Dark />
        <Language />
      </section>
    </header>
  </Transition>
</template>

<style>
/* 下面我们会解释这些 class 是做什么的 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 99;
  box-sizing: border-box;
  padding: 15px;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
}

.blur {
  @apply bg-#f5f5f520;
  /* -webkit-backdrop-filter: saturate(180%) blur(5px); */
  /* backdrop-filter: saturate(180%) blur(20px); */
}
</style>
