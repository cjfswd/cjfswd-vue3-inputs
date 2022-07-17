<template>
    <div class="input">
        <label>{{ label }}</label>
        <input type="date" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>
<script setup lang="ts" scoped>
defineProps<{ label?: string, modelValue: string }>()
</script>