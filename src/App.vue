<template>
  {{ selectedCategories }}
  <div class="card flex flex-wrap justify-center gap-4">
    <label
      v-for="(category, index) in CATEGORIES"
      :key="index"
      class="flex items-center gap-2"
    >
      <Checkbox
        v-model="selectedCategories"
        :value="category"
      />
      {{ category }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const CATEGORIES = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];

const selectedCategories = ref<string[]>([]);

</script>

