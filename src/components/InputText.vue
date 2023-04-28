<template >
  <q-input
    :value="value"
    @input="onInput"
  >
  <template v-slot:append>
    <q-btn v-if="origin" @click="check" icon="check"></q-btn>
  </template>
  </q-input>
</template>
<script>
export default {
  // model: {
	// 	prop:"value", // 부모에서 전달되는 값
	// 	event:"input", // input이벤트가 있을때
	// },
  props : ["value", 'origin',],
  emits : ['update:value'],
  methods : {
    check(val){
      console.log('------------>',this.origin);
      // console.log(this.cbCheck('g'));
    },
    onInput(val){
      console.log('val',val);
      this.value = val;
      console.log('------------>',this.value);
			this.$emit("update:value", val);
		},
  }
}
</script>
<style lang="">

</style>
