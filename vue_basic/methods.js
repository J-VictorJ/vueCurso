const methods = Vue.createApp({
    data() {
        return {
            text: '',
        }
    },
    methods: {
        changeText() {
            this.text = "Hello, World";
        }
    }
})
methods.mount('#app');

const position = Vue.createApp({
    data() {
        return {
            xPos: 0,
            yPos: 0,
        }
    },
    methods: {
        mousePos(event) {
            this.xPos = event.offsetX;
            this.yPos = event.offsetY;
        }
    }
});
position.mount("#position");

const moose = Vue.createApp({
    data(){
        return{
            count: 0,
        }
    },
    method: {
        moose(number){
            this.count+=number;
        }
    }
})
moose.mount("#moose");