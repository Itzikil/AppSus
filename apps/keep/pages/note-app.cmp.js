import noteList from '../cmps/note-list.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import { noteService } from '../services/note.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    template:`
        <section class="note-app flex">
            <add-note @add="add"/>
            <note-list :notes="showNotes"/>
        </section>
    `,
    data(){
        return{
            notes: null,

        }
    },
    created(){
        this.loadNotes()
        eventBus.on('remove', (noteId)=> {
            console.log(noteId);
            const idx = this.notes.findIndex(note => note.id === noteId)
            console.log(idx);
            this.notes.splice(idx,1)
        })
    },
    methods:{
        loadNotes(){
            noteService.query()
                .then(notes => {
                    this.notes = notes
            })
        },
        // how to fire to grandpa???
        add(note){
            this.notes.push(note)
            this.loadNotes()
        }
    },
    computed:{
        showNotes(){
            return this.notes
        }
    },
    components:{
        noteList,
        addNote
    },
    // watch:{
    //     add(){
    //         this.loadNotes()
    //     }
    // }
}