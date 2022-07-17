<template>
  <div class="flex flex-row gap-1 items-center">
    <input
      type="checkbox"
      :value="typeof option === 'string' ? option : option.value"
      v-model="model"
    />
    <label>{{ typeof option === "string" ? option : option.name }}</label>
  </div>
</template>
<script setup lang="ts" scoped>
import { computed } from "vue";
const emits = defineEmits(['update:modelValue'])
const props = defineProps<{
  option: { name: string; value: string } | string;
  modelValue: string[];
}>();

const model = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emits('update:modelValue', value)
    }
})
</script>
