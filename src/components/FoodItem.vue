<template>
    <div v-on:click="countClicks">
        <h2>{{ foodName }}
            <img src="/img/img_quality.svg" v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <p id="red">You've clicked {{ clicks }} times</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            name: "Apples",
            message: "I like apples",
            clicks: 0,
        }
    },
    methods:{
        countClicks(){
            this.clicks++;
        }
    },
    //props:['foodName', 'foodDesc', 'isFavorite', ]
    props:{
       foodName:{
            type: String,
            required: true
       },
        foodDesc: {
            type: String,
            default: "This's the default description",
            validator: function(value){
                if(20<value.length && value.length < 50){
                    return true;
                }
                else{
                    return false;
                }
            }
    },
        isFavorite:{
            type: Boolean,
            required: false,
            default: false,
        } 
    }

}
</script>

<style>
#red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
}
img {
        height: 1.5em;
        float: right;
    }
</style>