<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <p>
    {{ t('intro.hi', { name: props.name }) }}
  </p>

  <p text-sm opacity-75>
    <em>{{ t('intro.dynamic-route') }}</em>
  </p>

  <template v-if="user.otherNames.length">
    <p text-sm mt-4>
      <span opacity-75>{{ t('intro.aka') }}:</span>
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </router-link>
        </li>
      </ul>
    </p>
  </template>
  <Avatar h-6 w-6 />
  <div>
    <button btn m="3 t6" text-sm @click="router.back()">
      {{ t('button.back') }}
    </button>
  </div>
</template>
