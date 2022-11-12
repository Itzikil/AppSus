import { emailService } from "../apps/mail/services/email.service.js";
export default {
  template: `
    <section v-if="email" class="flex flex-column email-details email-app">
      <div class="email-user flex flex-column">
        <div class="email-user-container flex align-center">
          <router-link :to="emailListUrl"><i class="fa fa-arrow-left"></i></router-link>
          <i class="fa fa-user-circle flex align-center justify-center"></i>
          <h3>{{email.from}}</h3>
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
      email: null,
    };
  },
  created() {
    const id = this.$route.params.id
    emailService.get(id).then(email => {
      this.email = email
      this.email.isRead = true
      emailService.save(this.email)
    })
  },
  methods: {
    removeEmail() {
      
    },
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
  unmounted() { },
};
