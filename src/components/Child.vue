<template>
  <q-card-section>
    {{ data.publicData }}
  </q-card-section>
  <q-card-section>
    {{ data.privateData }}
  </q-card-section>

  <q-btn
    label="부모노드데이터 전송"
    @click="save"
    dense
    color="primary"
    class="q-pl-md q-pr-md"
    unelevated
  ></q-btn>
</template>

<script>
export default {
  name: "Child",
  expose: ["publicData", "publicMethod"],
  emits: ["onChild"], //emits옵션을 사용하여 발생된 이벤트를 선택적으로 선언할 수 있습니다 .
  data() {
    return {
      data: {
        publicData: "foo",
        privateData: "bar",
      },
    };
  },
  methods: {
    publicMethod() {
      this.data.publicData = "publicData foo";
      return this.data.publicData;
    },
    privateMethod() {
      this.data.privateData = "privateData bar";
      return this.data.privateData;
    },
    save() {
      this.$emit("onChild", this.data);
    },
  },
};
</script>

<style></style>
