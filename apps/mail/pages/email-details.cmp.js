import { emailService } from "../services/email.service.js";
export default {
    template: `
    <section v-if="email" class="email-details">
        <pre>{{email}}</pre>
        <router-link :to="emailListUrl"><button>Back to list</button></router-link>
    </section>
    `,
    data() {
        return {
            email: null
        }

    },
    methods: {
        removeEmail() { },
    },
    created() {
        const id = this.$route.params.id
        emailService.get(id).then(email => {
            this.email = email
            this.email.isRead = true
            emailService.save(this.email)
        })
    },
    computed: {
        emailListUrl() {
            const status = this.$route.params.status;
            return '/email/' + status;
        },
    },


}
