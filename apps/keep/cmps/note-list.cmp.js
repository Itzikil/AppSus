import notePreview from './note-preview.cmp.js'

export default {
    props:['notes'],
    template:`
        <section>
            <h1>list</h1>
            <ul class="note-ul flex clean-list pad">
                <li v-for="note in notes" class="note pad radius">
                    <note-preview :note="note"/>
                </li>
            </ul>
        </section>
    `,
    components:{
        notePreview
    }
}