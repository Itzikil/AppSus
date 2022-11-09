import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import noteIndex from './apps/keep/pages/note-index.cmp.js'
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
			component: noteIndex,
		},
		{
			path: '/email',
			component: emailIndex,
		},
	],
}

export const router = createRouter(routerOptions)
