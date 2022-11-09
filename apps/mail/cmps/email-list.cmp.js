import emailPreview from "./email-preview.cmp.js"
export default {
    props: ['emails'],
    template: `
    <tbody >
        <tr>
            <td>From</td>
            <td>Subject</td>
            <td>Body</td>
            <td>Sent At</td>
        </tr>
        <tr v-for="email in emails" :key="email.id">
            <email-preview :email="email"/>
        </tr>
    </tbody>
    `,
    components: {
        emailPreview,
    },
}
