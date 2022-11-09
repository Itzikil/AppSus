import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import noteApp from './apps/keep/pages/note-app.cmp.js'
import emailIndex from './apps/mail/pages/email-index.cmp.js'

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
			component: emailIndex,
		},
	],
}

export const router = createRouter(routerOptions)
