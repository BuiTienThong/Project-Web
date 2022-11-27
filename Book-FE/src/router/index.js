import { createWebHistory, createRouter } from 'vue-router';
import BookWeb from '@/views/BookWeb.vue';
const routes = [
    {
        path: '/',
        name: 'bookweb',
        component: BookWeb,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;