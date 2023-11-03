import { createRouter, createWebHistory } from 'vue-router';
import AllTodos from '@/components/AllTodos.vue';
import ActiveTodos from '@/components/ActiveTodos.vue';
import CompletedTodos from '@/components/CompletedTodos.vue';

const routes = [
  {
    path: '/all',
    name: 'all',
    component: AllTodos,
  },
  {
    path: '/active',
    name: 'active',
    component: ActiveTodos,
  },
  {
    path: '/completed',
    name: 'completed',
    component: CompletedTodos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

