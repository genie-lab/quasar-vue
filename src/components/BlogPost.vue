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
  props: ["title"], // 위에서 아래로 주는 부모가 주는 재산
  emits: ["enlarge-text"],
  data() {
    return {};
  },
};
</script>

<style></style>
