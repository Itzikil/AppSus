import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default {
    props:['note'],
    template:`
        <section>
            <h1>preview</h1>
            <p>{{note.id}}</p>
            <!-- <component 
                :is="cmp.type"  
                :info="cmp.info" 
            </component> -->
            <note-txt :note="note"/>
            <note-img :note="note"/>
            <note-todos :note="note"/>
        </section>
        `,
        components:{
            noteTxt,
            noteImg,
            noteTodos
        }
}