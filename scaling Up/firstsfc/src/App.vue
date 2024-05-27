
<template>
  <h1>Food </h1>
  <p>My favorite food has a diploma img on.</p>
  <div id="wrapper">
    <food-item food-name="Apples"
    
    v-bind:is-favorite="false"/>
    <food-item food-name="Pizza"
    food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top"
    v-bind:is-favorite="true"/>
    <food-item food-name="Açai"
    food-desc="Better with unhealthy things"
    v-bind:is-favorite="true"/>
  </div>
  
</template>

<script>
export default{
  data(){
    return{
      // vue v-for components
      foods: ['Apples','Pizza','Rice','Fish','Cake'],
    }
  }
}
</script>

<style>
#wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

</style>
