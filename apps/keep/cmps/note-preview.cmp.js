import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteFeatures from './note-features.cmp.js'
import {eventBus} from '../../../services/event-bus.service.js'
import { noteService } from '../services/note.service.js'

export default {
    props:['note'],
    template:`
        <section>
            <p>{{note.type}}</p>
            <component :is="note.type"
                :note="note"  >
            </component>
            <button @click="removeNote(note.id)" class="remove-note trans">X</button>
            <note-features />
        </section>
        `,
        methods:{
            removeNote(noteId){
                noteService.remove(noteId)
                .then(() => 
                eventBus.emit('remove',noteId))
            },
            editNote(note){
                noteService.save(note)
                // .then(() => 
                // eventBus.emit('remove',noteId))
            }
        },
        components:{
            noteTxt,
            noteImg,
            noteTodos,
            noteFeatures
        }
}