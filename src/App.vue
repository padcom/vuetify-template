<template>
  <v-app>
    <v-container>
      <HelloWorld />
      <p class="note">Now, delete me and get to work!</p>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="postcss" scoped>
.note {
  margin-top: 2.5rem;
}
</style>
