<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import misc404 from '@images/pages/404.png'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import type { NuxtError } from 'nuxt/app'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  error: NuxtError
}>()

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

const isDev = process.dev

const errToShow = computed(() => {
  const is404 = props.error?.statusCode === 404 || props.error.message?.includes('404')

  if (is404) {
    return {
      title: 'Page Not Found',
      description: 'We couldn\'t find the page you are looking for.',
    }
  }

  else if (isDev) {
    return {
      title: props.error?.statusMessage,
      description: props.error.message,
    }
  }

  return {
    title: 'Oops! Something went wrong.',
    description: 'We are working on it and we\'ll get it fixed as soon as we can',
  }
})

// const handleError = () => clearError({ redirect: '/' })
const handleError = () => {
  console.log("Вы решили вернуться на главную")
}
</script>

<template>
  <NuxtLayout name="blank">
    <div class="misc-wrapper">
      <ErrorHeader
        :status-code="props.error.statusCode"
        :title="errToShow.title"
        :description="errToShow.description"
      />

      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="isDev"
        style="max-inline-size: 80dvw; overflow-x: scroll;"
        v-html="props.error.stack"
      />
      <!-- eslint-enable -->

      <VBtn
        class="mb-11"
        @click="handleError"
      >
        На главную
      </VBtn>

      <!-- 👉 Image -->
      <div class="misc-avatar w-100 text-center">
        <VImg
          :src="misc404"
          alt="error 404"
          :max-height="$vuetify.display.smAndDown ? 350 : 500"
          class="mx-auto"
        />
      </div>

      <img
        class="misc-footer-img d-none d-md-block"
        :src="authThemeMask"
        alt="misc-footer-img"
        height="320"
      >
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>
