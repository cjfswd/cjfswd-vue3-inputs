<template>
    <div class="flex flex-row gap-1 sm:gap-2 sm:items-center flex-nowrap">
        <div v-if="label">{{ label }}</div>
        <div class="flex flex-row gap-1 items-center sm:justify-center">
            <input type="radio" :value="false" v-model="model" />
            <label>Não</label>
        </div>
        <div class="flex flex-row gap-1 items-center sm:justify-center">
            <input type="radio" :value="true" v-model="model" />
            <label>Sim</label>
        </div>
    </div>
</template>
<script setup lang="ts" scoped>
import { computed } from 'vue'
const emits = defineEmits(['update:modelValue'])
const props = defineProps<{
    label?: string, modelValue: boolean
}>()
const model = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emits('update:modelValue', value)
    }
})
</script>