
<template>
  <h3>
    Slot in vue
  </h3>
  <p>Hello World sent as a content to the slot tag</p>
  <slot-comp>Hello World</slot-comp>
</template>

<script>
export default{}
 
</script>

<style>
p{
  width: 200px;
}
#app div {
  border: dashed black 1px;
  margin: 10px;
  padding: 10px;
  display: inline-block;
}
</style>
