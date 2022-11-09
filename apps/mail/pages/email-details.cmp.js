import { emailService } from "../services/email.service.js";
export default {
    template: `
    <section v-if="email" class="email-details">
        <h2>{{ email.subject }}</h2>
        <h4>{{ email.from }}</h4>
        <h4>{{ email.sentAt }}</h4>
        <p>{{ email.body }}</p>
        <router-link to="/email"><button>Back to list</button></router-link>
    </section>
    `,
    data(){
        return{
            email: null
        }
            
    },
    created(){
        const id = this.$route.params.id
        emailService.get(id).then((email)=> (this.email=email))
    }


}
