<template>
  <q-dialog v-model="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <slot />

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn
          color="primary"
          unelevated
          dense
          label="OK"
          @click="onOKClick"
        />
        <q-btn
          unelevated
          dense
          color="primary"
          label="Cancel"
          @click="onCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "DialogCustom",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onOKClick() {
      this.dialog = false;
    },
    onCancelClick() {
      this.dialog = false;
    },
    onDialogHide() {},
  },
};
</script>

<style></style>
