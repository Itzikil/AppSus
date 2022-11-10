import emailPreview from "./email-preview.cmp.js"
export default {
    props: ['emails'],
    template: `
   
    <section class="email-list">
        <ul class="clean-list">
        <li v-for="email in emails" :key="email.id" :class="[email.isRead ? 'email-read' : '','email-preview-container']">
            <email-preview  @selectedEmail="goToLink" :selectedEmail="selectedEmail" :email="email"/>
        </li>
        </ul>
    </section>
    `,
    data() {
        return {
            selectedEmail: null,
        }
    },
    components: {
        emailPreview,
    },
    methods: {
        toggleEmailDescription(email) {
            if (this.selectedEmail === email) this.selectedEmail = null
            else this.selectedEmail = email
        },
        goToLink(email) {
            const status = this.$route.params.status
            this.$router.push('/email/' + status + '/' + email.id)
        },
    }
}
