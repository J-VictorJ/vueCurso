/*Prevent the default submit behavior of HTML forms (v-on:submit.prevent)
Make sure that an event can only run once after the page is loaded (v-on:click.once)
Specify what keyboard key to use as an event to run a method (v-on:keyup.enter) */

const app = Vue.createApp({
    data() {
        return {
            keyValue: ''
        }

    },
    methods: {
        getKey(evt) {
            this.keyValue = evt.key;
        }
    }
})
app.mount("#app");

/*const keydown = Vue.createApp({
    method: {
        createAlert(evt) {
            alert("Bye")
        }
    }
})
keydown.mount("#keydown")*/

const cliques = Vue.createApp({
    data() {
        return {
            bgColor: 0
        }
    },
    methods: {
        changeColor() {
            this.bgColor += 50;
        }
    }
})
cliques.mount('#cliques')