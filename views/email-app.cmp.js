import { emailService } from '../apps/mail/services/email.service.js'
import emailList from '../apps/mail/cmps/email-list.cmp.js'
import emailFilter from '../apps/mail/cmps/email-filter.cmp.js'


export default {
    template: `
       <section class="email-app">
            <email-filter @filter="filter"/>
            <email-list :emails="emailsToShow"/>
        </section>
    
    `,
    data() {
        return {
            emails: null,
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
        filter(filterBy){

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