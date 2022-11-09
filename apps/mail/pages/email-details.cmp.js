import { emailService } from "../services/email.service";
export default {
    template: `
    <section v-if="email" class="email-details">
      <pre>{{email}}</pre>
    <router-link to="/email"><button>Back to list</button></router-link>
    `,
    date(){
        return{
            email: null
        }
            
    },
    created(){
        const id = this.$route.params.emailId
        emailService.get(id).then(email=> this.email=email)
    }


}
