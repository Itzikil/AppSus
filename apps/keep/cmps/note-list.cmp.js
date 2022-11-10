import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section>
            <h2 class="pad">Pinned</h2>
            <ul class="note-ul pinned-note clean-list pad">
                <template v-for="note in notes">
                    <li :style="{'background-color': note.style.backgroundColor}" v-if="note.isPinned" class="note pad radius">
                        <note-preview  :note="note"/>
                    </li>
                </template>
            </ul>
            <h2 class="pad">Unpinned</h2>
            <ul class="note-ul unPinned-note clean-list pad">
                <template v-for="note in notes" :key="note.id">
                    <li :style="{'background-color': note.style.backgroundColor}" v-if="!note.isPinned"  class="note pad radius">
                        <note-preview   :note="note"/>
                    </li>
                </template>
            </ul>
        </section>
    `,

    methods:{
    },
    components: {
        notePreview
    }
}