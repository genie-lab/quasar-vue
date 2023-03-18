<template>
  <q-card-section :class="{foo:true, bar:true}" :id="$attrs.id">안녕!</q-card-section>

</template>

<script>
export default {
  data() {
  	return {
	    parentMessage: 'Parent',
    	items: [{ message: 'Foo' }, { message: 'Bar' }]
  	}
	}
}
</script>

<style>
.foo {
  border: 2px solid rebeccapurple;
}
.bar{
  color:blue;
}

</style>
