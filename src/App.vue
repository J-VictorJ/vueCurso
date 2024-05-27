
<template>
  <h3>
    Slot in vue
  </h3>
  <p>Card-like from foods array</p>
  <div id="wrapper">
      <slot-comp v-for="x in foods">
        <img v-bind:src="x.url">
        <h4>{{ x.name }}</h4>
        <p>{{ x.desc }}</p>
      </slot-comp>
      
    </div>
</template>

<script>
export default{
  data(){
    return{
      foods: [
      { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img/img_apple.svg'},
      { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img/img_pizza.svg'},
      { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'img/img_cake.svg'},
      { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img/img_rice.svg'},
    ]
    }
  }
}
 
</script>

<style>
#wrapper {
    display: flex;
    flex-wrap: wrap;
  }
#wrapper img {
  display: block; 
  margin: auto; 
  width: 60%;
}
</style>
