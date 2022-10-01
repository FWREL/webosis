import { createWebHistory, createRouter } from "vue-router";

import dashboard from './pages/dashboard.vue';
import category from './pages/category.vue';

const routes = [
    {
        path : '/dashboard',
        name : 'Dashboard',
        component : dashboard
    },
    {
        path : '/dashboard/category',
        name : 'Category',
        component : category
    },
];

const router = createRouter({
    history:  createWebHistory(),
    routes
});

export default router;