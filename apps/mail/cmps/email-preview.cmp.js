export default {
    props: ['email'],
    template: `
    <td>{{ email.from }}</td>
    <td>{{ email.subject }}</td>
    <td>{{ email.body }}</td>
    <td>{{ email.sentAt }}</td>
   
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