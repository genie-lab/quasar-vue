<template>
    <q-list class="bordered separator">
      <q-item clickable v-ripple>
        <q-item-section class="flex-center">
          {{ title }}
          <q-btn
            label="Enlarge text"
            unelevated
            dense
            color="primary"
            class="q-pl-md q-pr-md q-mt-sm"
            @click="$emit('enlarge-text')"
          />
        </q-item-section>
      </q-item>
      <q-separator />
    </q-list>
</template>

<script>
export default {
  props: ["title"],
  emits: ["enlarge-text"],
  data() {
    return {};
  },
};
</script>

<style></style>
