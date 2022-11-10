import notePreview from './note-preview.cmp.js'

export default {
    props:['notes'],
    template:`
        <section>
            <h2>Pinned</h2>
            <ul class="note-ul pinned-note clean-list pad">
                <template v-for="note in notes">
                    <li v-if="note.isPinned" class="note pad radius">
                        <note-preview  :note="note"/>
                    </li>
                </template>
            </ul>
            <h2>Unpinned</h2>
            <ul class="note-ul unPinned-note clean-list pad">
                <template v-for="note in notes">
                    <li v-if="!note.isPinned" class="note pad radius">
                        <note-preview  :note="note"/>
                    </li>
                </template>
            </ul>
        </section>
    `,
    components:{
        notePreview
    }
}