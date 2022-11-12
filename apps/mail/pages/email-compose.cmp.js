import { emailService } from "../services/email.service.js"
export default {
    props:['user', 'email', 'note'],
    template: `
    <section class="email-compose">
    <h4>Write your email
        <button class="btn btn-close-form"  @click="$emit('closeForm',false)">
          X
        </button>
      </h4>
       <form @submit.prevent="composeEmail" class="email-compose-form">
        
         <label>
               <input placeholder="To" required v-model="sendEmail.to"  type="email" class="email-form-input-to">
           </label>
           <label>
               <input required placeholder="Subject" type="text" class="email-form-input-subject" maxlength="15" v-model="sendEmail.subject">
           </label>
           <textarea class="email-compose-textarea" v-model="sendEmail.body" cols="30" rows="10">
           </textarea>
           <div class="btn-email-container">
                <button type="submit" class="btn send-form-btn">
                Send
                </button>
           </div>
       </form>
    </section>
   `,
    data() {
        return {
            sendEmail: {
                to: this.email?.to || '',
                subject: this.email?.subject || this.note?.type || '',
                body: this.note?.txt || '',
                isRead: false,
                isStarred: false,
                status: 'sent',
                from: this.user?.email,
            },
            interval: null,
        }
    },
    created() {
        emailService.queryUser().then(({ email }) => {
            this.sendEmail.from = email
            const { to } = this.sendEmail
            this.sendEmail.to = to === email ? this.email?.from : to
        })
    },
    methods: {
        composeEmail() {
            const newEmail = JSON.parse(JSON.stringify(this.sendEmail))
            newEmail.sentAt = emailService.showTime(new Date)
            newEmail.status = 'sent'
            this.$emit('composedEmail', newEmail)
            this.sendEmail.to = ''
            this.sendEmail.body = ''
            this.sendEmail.subject = ''
        },
    },
    computed: {},
    unmounted() { },

}