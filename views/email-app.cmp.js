import { emailService } from '../apps/mail/services/email.service.js'
import { eventBus } from '../services/event-bus.service.js'
import emailList from '../apps/mail/cmps/email-list.cmp.js'
import emailFilter from '../apps/mail/cmps/email-filter.cmp.js'
import emailFolderList from '../apps/mail/cmps/email-folder-list.cmp.js'
import emailCompose from '../apps/mail/pages/email-compose.cmp.js'


export default {
    name: 'email-app',
    template: `
        <section class="email-app">
            <email-filter @filtered="setFilter" />
            <email-list :emails=emailsToShow />
            <email-folder-list @openModal="toggleForm" :emails="emails"/>
        </section>
        <aside>
            <email-compose @closeForm="closeModal" :user="loggedUser" @composedEmail="saveEmail" v-if="showModal" />
        </aside>
  
    
    `,
    data() {
        return {
            emails: null,
            showModal: false,
            unsubscribe: null,
            filterBy: {},
            sortBy: '',
            
        }
    },

    created() {
        emailService.query().then((emails) => { this.emails = emails })
        
        this.unsubscribe = eventBus.on('remove-email', this.removeEmail)

    },
    methods: {
        setSort(sortBy) {
            this.sortBy = sortBy;
        },
        saveEmail(email) {
            emailService.save(email)
                .then(emailService.query)
                .then(emails => {
                    this.emails = emails
                })
            this.showModal = false
        },
        removeEmail(receivedEmail) {
            if (!receivedEmail.isTrash) {
                receivedEmail.isTrash = true
                return emailService.save(receivedEmail)
            } else
                emailService.remove(receivedEmail.id).then(() => {
                    const idx = this.emails.findIndex(
                        email => email.id === receivedEmail.id
                    )
                    this.emails.splice(idx, 1)
                })
        },
        toggleForm() {
            this.showModal = !this.showModal
        },
        closeModal() {
            this.showModal = false;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

    },
    computed: {
        emailsToShow() {
            if (!this.emails) return
            const { txt, status, condition } = this.filterBy
            const regex = new RegExp(txt, 'i')
            let filteredEmails = this.emails
            if (txt)
                filteredEmails = filteredEmails.filter(
                    ({ subject, to, from }) =>
                        regex.test(subject) || regex.test(to) || regex.test(from)
                )
            if (condition && condition.includes('un')) {
                const adjustedCondition =
                    'is' +
                    condition.slice(2).replace(condition[2], condition[2].toUpperCase())

                filteredEmails = filteredEmails.filter(
                    email => email[adjustedCondition]
                )
            } else if (condition) {
                const adjustedCondition =
                    'is' + condition.replace(condition[0], condition[0].toUpperCase())

                filteredEmails = filteredEmails.filter(
                    email => !email[adjustedCondition]
                )
            }

            if (status && status !== 'inbox') {
                filteredEmails = filteredEmails.filter(
                    email =>
                        email['is' + status.replace(status[0], status[0].toUpperCase())]
                )
            }
            if (this.sortBy === 'date')
                filteredEmails = filteredEmails.sort((a, b) => a.sentAt - b.sentAt)

            if (this.sortBy === 'title')
                filteredEmails = filteredEmails.sort((a, b) =>
                    a.subject.localeCompare(b.subject)
                )

            return filteredEmails
        },
    },
    components: {
        emailList,
        emailFilter,
        emailFolderList,
        emailCompose,

    },
    unmounted() {
        this.unsubscribe()
    },
    watch: {
        $route: {
            handler() {
                const {
                    params: { status },
                } = this.$route
                return (this.filterBy.status = status)
            },
            immediate: true,
        },
    },
}