const on = Vue.createApp({
    data(){
        return{
            lightOn: true,
            click:0, //onclick
            inputCount: 0, //input
            colorVal: 50, //mousemove
            imgUrl: 'img/img_pizza.svg',
            manyFoods:[
                {name: 'Pizza', url: 'img/img_pizza.svg'},
                {name: 'Cake', url: 'img/img_cake.svg'},
                {name: 'Soup', url: 'img/img_soup.svg'},
                {name: 'Rice', url: 'img/img_rice.svg'}
            ],
        }
    }
});
on.mount("#app");