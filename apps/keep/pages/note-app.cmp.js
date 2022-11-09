import noteList from '../cmps/note-list.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import { noteService } from '../services/note.service.js'

export default {
    template:`
        <section class="note-app flex">
            <h1>Note</h1>
            <add-note @addNote="addNote"/>
            <note-list :notes="notes"/>
        </section>
    `,
    data(){
        return{
            notes: null,

        }
    },
    created(){
        noteService.query()
        .then(notes => {
            this.notes = notes
        })
    },
    methos:{
        addNote(note){
            console.log('hi');
            this.notes.push(note)
        }
    },
    components:{
        noteList,
        addNote
    }
}