const app = Vue.createApp({
    data(){
        return{
            itemName: null,
            itemNumber: null,
            shoppingList:[
                {name: 'Product', number: 'Many'},
            ],
        }
    },
    methods:{
        addItem(){
            let global, item = {
                name: this.itemName,
                number: this.itemNumber,
            }
            this.shoppingList.push(item);
            this.itemName = null;
            this.itemNumber = null;
        },
    }
})
app.mount("#app");