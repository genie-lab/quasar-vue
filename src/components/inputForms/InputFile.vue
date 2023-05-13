<template>
  <q-file
    rounded
    bottom-slots
    :model-value="modelValue"
    label="Label"
    @update:model-value="onInput"
    counter
    max-files="12"
    accept=".jpg, .jpeg, .png, image/*"
  >
    <template v-slot:before>
      <q-avatar size="40px">
        <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
      </q-avatar>
    </template>

    <template v-slot:hint> Field hint </template>
  </q-file>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(val) {
      console.log("val", val);
      this.$emit("update:modelValue", val[0]);
    },
  },
});
</script>

<style></style>
