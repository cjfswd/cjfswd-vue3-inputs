<template>
  <div class="flex flex-row gap-x-2 gap-y-1 flex-wrap">
    <InputCheckbox v-for="item in options" :option="item" v-model="model" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import InputCheckbox from "../checkbox.vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{
  options: { name: string; value: string }[] | string[];
  modelValue: string[];
}>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>
