import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default {
    props:['note'],
    template:`
        <section>
            <h1>preview</h1>
            <p>{{note.type}}</p>
            <component :is="note.type"
                :note="note"  >
            </component>
            <!-- <note-txt :note="note"/>
            <note-img :note="note"/>
            <note-todos :note="note"/> -->
        </section>
        `,
        components:{
            noteTxt,
            noteImg,
            noteTodos
        }
}