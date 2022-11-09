import { emailService } from '../apps/mail/services/email.service.js'
import emailList from '../apps/mail/cmps/email-list.cmp.js'
import emailFilter from '../apps/mail/cmps/email-filter.cmp.js'


export default {
    template: `
        <section class="email-app flex flex-row">
            <section class="email-nav">
                <h1>email folder list</h1>
            </section>
            <section class="email-content">
                <email-filter @filter="filter"/>
                <email-list :emails="emailsToShow"/>
            </section>
        </section>
    
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterBy: null,

        }
    },

    created() {
        emailService.query().then((emails) => {
            this.emails = emails
        })

    },
    methods: {
        filter(filterBy) {

        }

    },
    computed: {
        emailsToShow() {
            return this.emails
        },
    },
    components: {
        emailList,
        emailFilter,


    },

}