<template>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="bottomSlot"></slot>
    </div>
</template>
<script>
// slot shorthand = #
</script>

<style scoped>
div {
    height: 30px;
    width: 50%;
    border: dotted black 1px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    font-weight: bold;
}
</style>