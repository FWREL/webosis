import { createRouter, createWebHistory } from 'vue-router';

import Category from '../components/Category.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/dash',
        name: 'Dashboard',
        component:Dashboard
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
