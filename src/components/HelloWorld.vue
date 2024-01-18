<template>
  <h1>Hello, world! {{ message }} {{ selection }}</h1>
  <v-radio-group v-model="selection" inline>
    <v-radio value="1" label="One" />
    <v-radio value="2" label="Two" />
    <v-radio value="3" label="Three" />
  </v-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const selection = ref()
</script>

<style lang="postcss" scoped>
h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
