// v-if Creates HTML tags depending on a condition. Directives v-else-if and v-else are used together with the v-if directive.

const v_if = Vue.createApp({
    data(){
        return{
            typewritersInStock: 1,
            text: "I like Sandwich, pizza, ice Cream and Açai. I don't like hamburger tho",
        }
    }
})
v_if.mount("#app");