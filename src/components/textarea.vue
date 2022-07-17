<template>
    <div class="input"><label v-if="label">{{ label }}</label><textarea
            :placeholder="label ? label : placeholder ? placeholder : ''" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" /></div>
</template>
<script setup lang="ts" scoped>
defineProps<{ label?: string, placeholder?: string, modelValue: string }>()
</script>