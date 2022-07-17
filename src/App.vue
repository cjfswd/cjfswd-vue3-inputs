<script setup lang="ts">
import { reactive } from "vue";
import {
  InputText,
  InputTextArea,
  InputDate,
  InputSelect,
  InputSwitch,
  InputCheckbox,
  InputGroupCheckbox,
} from "cjfswd-vue3-inputs";

const data = reactive({
  inputText: "",
  inputTextArea: "",
  inputDate: "1999-03-26",
  inputSelect: "a",
  inputSwitch: true,
  inputCheckbox: ["a"],
  inputGroupCheckbox: ["thisisainputgroupcheckbox"],
});
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col gap-2 w-1/2">
      <InputText label="InputText" v-model="data.inputText" />
      <InputText placeholder="InputText" v-model="data.inputText" />
      <InputText v-model="data.inputText" />
      <InputTextArea label="InputTextArea" v-model="data.inputTextArea" />
      <InputTextArea placeholder="InputTextArea" v-model="data.inputTextArea" />
      <InputTextArea v-model="data.inputTextArea" />
      <InputDate label="InputDate" v-model="data.inputDate" />
      <InputDate v-model="data.inputDate" />
      <InputSelect
        label="InputSelect"
        :options="['a', 'b', 'c']"
        v-model="data.inputSelect"
      />
      <InputSelect :options="['a', 'b', 'c']" v-model="data.inputSelect" />
      <InputSelect
        :options="[
          { name: '1', value: 'a' },
          { name: '2', value: 'b' },
          { name: '3', value: 'c' },
        ]"
        v-model="data.inputSelect"
      />
      <InputSwitch label="InputSwitch" v-model="data.inputSwitch" />
      <InputSwitch v-model="data.inputSwitch" />
      <InputCheckbox option="a" v-model="data.inputCheckbox" />
      <InputCheckbox option="a" v-model="data.inputCheckbox" />
      <InputCheckbox option="b" v-model="data.inputCheckbox" />
      <InputCheckbox
        :option="{ name: 'falseb', value: 'b' }"
        v-model="data.inputCheckbox"
      />
      <InputGroupCheckbox
        :options="['thisisainputgroupcheckbox', 'q', 'w', 'r']"
        v-model="data.inputGroupCheckbox"
      />
      <InputGroupCheckbox
        :options="[
          { name: 'a', value: 'thisisainputgroupcheckbox' },
          { name: 'b', value: 'x' },
          { name: 'c', value: 'c' },
          { name: 'd', value: 'd' },
        ]"
        v-model="data.inputGroupCheckbox"
      />
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
}
</style>
