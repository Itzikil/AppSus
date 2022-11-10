import { emailService } from "../services/email.service.js";
export default {
    template: `
    <section v-if="email" class="flex flex-column email-details">
        <div class="email-user flex flex-column">
            <div class="email-user-container flex align-center">
                <router-link :to="emailListUrl"></router-link>
                <p>{{showEmailSentAtTime}}</p>
            </div>
        <small class="text-secondary">to {{email.to}}</small>
        </div>
        <div class="email-content">
            <p>{{email.body}}</p>
        </div>
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
        showEmailSentAtTime() {
            return new Date(this.email.sentAt)
                .toString()
                .slice(0, 24)
                .replaceAll(' ', ',');
        },
    },


}
