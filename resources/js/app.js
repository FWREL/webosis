import './bootstrap';
import { createApp } from "vue/dist/vue.esm-bundler.js";

import DashboardComponent from "./components/Dashboard.vue";
import CategoryComponent from "./components/Category.vue";

import router from "./router/index"
const app = createApp({
    components: {
        DashboardComponent,
        CategoryComponent,
    }
});

app.use(router) 
app.mount('#app')