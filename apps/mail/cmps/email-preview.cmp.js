export default {
    props: ['email'],
    template: `
    <td><router-link :to="'/email/' + email.id">{{ email.from }}</router-link></td>
    <td><router-link :to="'/email/' + email.id">{{ email.subject }}</router-link></td>
    <td><router-link :to="'/email/' + email.id">{{ email.body }}</router-link></td>
    <td><router-link :to="'/email/' + email.id">{{ email.sentAt }}</router-link></td>
   
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