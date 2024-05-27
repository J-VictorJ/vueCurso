<template>
    <div>
        <slot
        v-for="x in foods"
        :key="x.name"
        :foodName="x.name"
        :foodDesc="x.desc"
        :foodUrl="x.url"></slot>
    </div>
</template>
<script>
export default{
    data(){
        return{
            foods: [
                { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img/img_apple.svg' },
                { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img/img_pizza.svg' },
                { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img/img_rice.svg' },
                { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'img/img_cake.svg' }
            ]
        }
    }
}
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