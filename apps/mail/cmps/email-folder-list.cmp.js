export default {
    props: ['emails'],
    template: `
    <section @mouseenter="toggleMenu" @mouseleave="toggleMenu"  :class="[expand,'email-folder-list flex flex-column']">
          <a @click="$emit('openModal')" class="btn  compose-btn  ">
              
          <div class="fa fa-plus-square text"></div>
            </a>
            
       <router-link v-for="(opt,i) in options" class="btn email-status-btn" :class="show(opt)" :key="i" :to="'/email/'+opt" >
                <i :class="'fa fa-'+icons[i]"></i>
                <span>{{opt.replace(opt[0],opt[0].toUpperCase())}}</span>
       </router-link>
       <a v-if="showUnreadEmailsCount" class="email-active unread-emails">
            <i class="fa fa-envelope"></i>
            <small>Unread emails: {{showUnreadEmailsCount}}</small>
            </a>
    </section>
  `,
    data() {
        return {
            options: ['inbox', 'sent', 'trash'],
            icons: ['inbox', 'paper-plane', 'trash', 'file'],
            isOpen: false,
        }
    },
    created() { },
    methods: {
        show(opt) {
            if (opt === this.$route.params.status) return 'email-active'
        },
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
    computed: {
        showUnreadEmailsCount() {
            return this.emails?.reduce((acc, email) => {
                if (!email.isRead) return acc + 1
                else return acc
            }, 0)
        },
        expand() {
            return this.isOpen ? 'email-nav-open' : ''
        },
    },
    unmounted() { },
}