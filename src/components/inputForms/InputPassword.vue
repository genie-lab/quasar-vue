<template>
  <!--v-bind 약어 : 로 :model-value 가져옴 단방향     @update:model-value="val => { file = val }"
-->
  <q-input
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="onInput"
    :type="type ? 'password' : 'text'"
  >
    <template v-slot:prepend>
      <q-icon name="key" />
    </template>
    <template v-slot:append>
      <q-icon
        :name="type ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="type = !type"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "inputPassword",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    modelModifiers: {
      // 수정자 가져옴
      default: () => ({}),
    },
  },
  data() {
    return {
      type: true,
    };
  },
  methods: {
    onInput(val) {
      this.$emit("update:modelValue", val);
    },
  },
};
</script>

<style></style>
