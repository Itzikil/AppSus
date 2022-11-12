import appFooter from "../cmps/app-footer.cmp.js"
export default {
    template: `
        <section class="home-page">
            <h1 class="pad">Welcome to AppSus</h1>
            <div class="img-container flex">
                <img src="img/1.jpg" alt="" />
                <img src="img/3.jpg" alt="" />
            </div>
            <app-footer />
        </section>
    `,
components: {
    appFooter,
},
}
