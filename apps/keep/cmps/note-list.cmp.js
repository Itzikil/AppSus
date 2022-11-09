import notePreview from './note-preview.cmp.js'

export default {
    props:['notes'],
    template:`
        <section>
            <ul class="note-ul clean-list pad">
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