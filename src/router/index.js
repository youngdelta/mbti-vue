import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history', //해쉬값 제거 방식
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: () => import('../App.vue'),
		},
		{
			path: '/questions',
			component: () => import('../views/QuestionsView.vue'),
		},
	],
});
