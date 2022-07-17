<template>
    <div class="input">
        <label>{{ label }}</label>
        <select :value="modelValue"
            @change="$emit('update:modelValue', isArrayOfStrings(options) ? options[(($event.target as HTMLSelectElement).selectedIndex)] : optionsObjectArray(options)[(($event.target as HTMLSelectElement).selectedIndex)].value)">
            <option v-for="item in options" :value="typeof item == 'string' ? item : item.value">{{ typeof item == 'string' ? item : item.name}}</option>
        </select>
    </div>
</template>
<script setup lang="ts" scoped>
defineProps<{ label?: string, options: { name: string, value: string }[] | string[], modelValue: string }>()

const isArrayOfStrings = (value: any): boolean => {
    return Array.isArray(value) && value.every(item => typeof item === "string");
}

const optionsObjectArray = (array: ({ name: string, value: string } | string)[]) => {
    if (!isArrayOfStrings(array)) return array as { name: string, value: string }[]
    return [] as { name: string, value: string }[]
}
</script>