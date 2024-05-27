import { createApp } from 'vue';
import App from './App.vue';
import FoodItem from './components/FoodItem.vue';

// Create Vue application and register FoodItem component
const app = createApp(App);
app.component('food-item', FoodItem);

app.mount('#app');
