import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteFeatures from './note-features.cmp.js'

export default {
    props: ['note'],
    template: `
        <section>
            <p>{{note.type}}</p>
            <component :is="note.type"
                :note="note"  >
            </component>
            <note-features :note="note"/>
        </section>
        `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteFeatures
    }
}