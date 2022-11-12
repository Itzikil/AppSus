import { emailService } from "../services/email.service.js"
import { eventBus } from "../../../services/event-bus.service.js"




export default {
    template: `
   <section @click="$emit('selectedEmail',email)" class="email-preview flex align-center" >
          <div @click.stop="toggleStarred"  :class="[showStarred,'fa fa-star email-icon ']">
          </div>
          <div  :class="[email.isRead ? 'h-txt' : 'details']">
              <span>
                  {{email.from}}
              </span>
              <span>
                  {{email.subject}} - {{showContent}}
              </span>
              <span>
                  {{email.sentAt}}
              </span>
          </div>
          <div class="email-icons">
          <i @click.stop="toggleRead" :class="[showRead,'email-icon']"></i>
          <i @click.stop="removeEmail" class="fa fa-trash email-icon"></i>
          <i class="fa fa-reply email-icon" aria-hidden="true" @click.stop="$emit('reply',email)"></i>
        </div>
    </section>
    <router-link :to.stop="sendToNote" class="fa fa-sticky-note email-icon" aria-hidden="true"></router-link> 
  `,
    data() {
        return {};
    },
    created() { },
    methods: {
        toggleRead() {
            this.email.isRead = !this.email.isRead;
            emailService.save(this.email).then(
                eventBus.emit('show-msg', {
                    txt: this.email.isRead
                        ? 'Email marked as read'
                        : 'Email marked as unread',
                    type: 'success',
                })
            );
        },
        toggleStarred() {
            this.email.isStarred = !this.email.isStarred;
            emailService.save(this.email);
        },
        removeEmail() {
            eventBus.emit('remove-email', this.email);
        },

    },
    computed: {
        showContent() {
            if (this.email.body.length > 20)
                return this.email.body.slice(0, 17) + '...';
            return this.email.body;
        },
        showRead() {
            return {
                'fa fa-envelope': this.email.isRead === false,
                'fa fa-envelope-open-o': this.email.isRead === true,
            };
        },
        showStarred() {
            return this.email.isStarred ? 'email-star-yellow' : 'email-star-grey';
        },

        sendToNote() {
            return (
                `/note/` +
                '?' +
                new URLSearchParams({
                    type: 'note-txt',
                    txt: this.email.body,
                    backgroundColor: "#e7e7e7",
                }).toString()
            )
        }
    },
    unmounted() { },
    props: ['email', 'selectedEmail'],
    components: {},
};

