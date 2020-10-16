import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import reset from '../assets/css/reset.css'
import Index from '../views/Index.vue'
import Search from '../views/Search.vue'
import Details from '../views/Details.vue'
// import Ceshi from '../components/ceshi/ceshi.vue'
// import Login from '../views/Login.vue'
// import Username from '../views/Username.vue'




Vue.use(VueRouter)

const routes = [
	// {
	// 	path:'/ceshi',
	// 	component:Ceshi
	// },
	{
		path:'/details',
		component: Details
	},
	// {
	// 	path:'/login',
	// 	component: Login
	// },
	{
		path: '/search',
		component: Search
	},
	{
		path: '/',
		component: Index
	},
	// {
	// 	path: '/username',
	// 	component: Username
	// },
	{
		path: '/register',
		// route level code-splitting
		// this generates a separate chunk (register.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
	},
	{
		path: '/people',
		// route level code-splitting
		// this generates a separate chunk (people.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "people" */ '../views/People.vue')
	},

	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	routes
})

export default router
