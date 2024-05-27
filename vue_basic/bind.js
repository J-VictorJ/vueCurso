// v-bind Connects an attribute in an HTML tag to a data variable inside the Vue instance.

const app = Vue.createApp({
    data(){
        return{
            url: "img.jpg",
            size: "28px",
            anotherSize: 2, // I inserted 'em' in the properly div
            size_name: 4,  // CSS
            bgVal: 100,  //based on this var, the browser will set the background, this value: is 0 - 360
            ternary: false,
        }
    }
})
app.mount('#app');