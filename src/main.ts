import { createApp } from 'vue';
import App from './App.vue';

import TodoItem from './components/TodoItem.vue'

// Create Vue application and register FoodItem component
const app = createApp(App);
app.component('todo-item', TodoItem)

app.mount('#app');
