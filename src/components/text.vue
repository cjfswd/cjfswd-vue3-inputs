<template>
  <div class="flex flex-col">
    <label v-if="label">{{ label }}</label
    ><input
      :placeholder="label ? label : placeholder ? placeholder : ''"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
<script setup lang="ts" scoped>
defineProps<{ label?: string; placeholder?: string; modelValue: string }>();
</script>
