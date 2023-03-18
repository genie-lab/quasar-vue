<template>
  <div class="q-pa-md">
      <q-item clickable v-ripple>
        <q-item-section>{{ idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
  </div>
  <q-separator />
</template>

<script>
export default {
  name:'MyComponent',
  props :{ item, index }
}
</script>

<style>

</style>
