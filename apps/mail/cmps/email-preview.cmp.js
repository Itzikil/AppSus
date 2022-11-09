export default {
    props: ['email'],
    template: `
    
    <section class="email-preview flex align-center" >
        <div  class="details flex align center">
            <span>
                <router-link :to="'/email/' + email.id">{{ email.subject }}</router-link>
            </span>
            <span>
                <router-link :to="'/email/' + email.id">{{ email.body }}</router-link>
            </span>
            <span>
                <router-link :to="'/email/' + email.id">{{ email.sentAt }}</router-link>
            </span>
        </div>
    </section>
    `,

    data() {
        return {

            
        }
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },

}