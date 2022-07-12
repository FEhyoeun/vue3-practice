import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';

// routes는 현재 페이지 컴포넌트와 관련된 정보
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    component: PostListView,
  },
  {
    path: '/posts/create',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
  },
];

// router는 페이지를 이동할 수 있게 해주는 객체
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
