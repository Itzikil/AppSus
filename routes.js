import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import emailPage from './views/email-app.cmp.js'
import noteApp from './apps/keep/pages/note-app.cmp.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},
		{
			path: '/note',
			component: noteApp,
		},
		{
			path: '/email',
			component: emailPage,
		},
	],
}

export const router = createRouter(routerOptions)
