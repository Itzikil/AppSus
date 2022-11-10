import { emailService } from "../services/email.service.js"
import { eventBus } from "../../../services/event-bus.service.js"




export default {
    props: ['email', 'selectedEmail'],
    template: `
    
    <section class="email-preview" >
        <div @click="toggleStarred"  :class="[showStarred,'email-icon']">
          ★
        </div>
        <div @click="$emit('selectedEmail',email)" class="details">
        
            <span>
                {{email.from}}
            </span>
            <span>
                {{email.subject}}
            </span>
            <span>
                {{ email.sentAt }}
            </span>
        </div>
        <div class="email-icons">
        <i @click="toggleRead" :class="[showRead,'email-icon']" ></i>
        <i @click="removeEmail" class="fa fa-trash email-icon" aria-hidden="true"></i>
        </div>
        
    </section>
    `,

    data() {
        return {

        }
    },
    created() { },
    methods: {
        toggleRead() {
            this.email.isRead = !this.email.isRead
            emailService.save(this.email)
        },
        toggleStarred() {
            this.email.isStarred = !this.email.isStarred
            emailService.save(this.email)
        },
        removeEmail(receivedEmail) {
            eventBus.emit('remove-email', this.email);

        },
    },
        
        computed: {
            showRead() {
                return {
                    'fa fa-envelope': this.email.isRead === false,
                    'fa fa-envelope-open': this.email.isRead === true,
                }
            },
            showStarred() {
                return this.email.isStarred ? 'email-star-yellow' : 'email-star-grey'
            }
        },
        unmounted() { },
    }

    