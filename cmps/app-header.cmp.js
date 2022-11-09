export default {
	template: `
        <header class="app-header flex">
            <h1>AppSus</h1>
            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/about">About</router-link> |
                <router-link to="/note">Notes</router-link> |
                <router-link to="/email">Emails</router-link>
            </nav>
        </header>
    `,
}
