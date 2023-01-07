// import Vue from 'vue';
// import VueRouter from 'vue-router';
// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import QuestionsView from '@/views/QuestionsView.vue';

// Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'HomeView',
		// component: () => import('@/views/HomeView'), // 동적 import
		component: HomeView,
	},
	{
		path: '/questions',
		name: 'QuestionsView',
		// component: () => import('@/viws/QuestionsView'),
		component: QuestionsView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// export default new VueRouter({
// 	mode: 'history', //해쉬값 제거 방식
// 	routes: [
// 		{
// 			path: '/',
// 			redirect: '/home',
// 		},
// 		{
// 			path: '/home',
// 			component: () => import('../App.vue'),
// 		},
// 		{
// 			path: '/questions',
// 			component: () => import('../views/QuestionsView.vue'),
// 		},
// 	],
// });

export default router;
