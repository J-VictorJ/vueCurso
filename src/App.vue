
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
    <footer>
      <slot-comp>
        <h4>Footer</h4>
      </slot-comp>
    </footer>
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
    justify-content: space-around;
  }
#wrapper > div {
  background-color: lightgreen;
}
#wrapper img {
  display: block; 
  margin: 20% auto 0; 
  width: 60%;
}
footer > div {
  background-color: lightpink;
}
h3, h4{
  text-align: center;
}
</style>
