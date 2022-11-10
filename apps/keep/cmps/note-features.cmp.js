import { noteService } from '../services/note.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    props: ['note'],
    template: `
        <section class="note-features flex">
            <button @click="pinNote(note)" class="trans"><i class="fa fa-thumb-tack icon" aria-hidden="true"></i></button>
            <!-- <button class="btn trans"><i class="fa fa-paint-brush" aria-hidden="true"></i> <input type="color" hidden/></button> -->
            <label class="btn trans change-color"> <i class="fa fa-paint-brush" aria-hidden="true"></i>
                <input type="color" hidden/>
            </label>
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-envelope" aria-hidden="true"></i></button>
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button @click="removeNote(note.id)" class="btn trans"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </section>
        `,
           methods:{
            removeNote(noteId){
                noteService.remove(noteId)
                    .then(() => 
                    eventBus.emit('remove',noteId))
            },
            pinNote(note){
                note.isPinned = !note.isPinned
                console.log(note.isPinned);
                    noteService.save(note)
            },
        },

}