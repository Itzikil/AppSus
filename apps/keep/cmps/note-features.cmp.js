import { noteService } from '../services/note.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    props: ['note'],
    template: `
        <section class="note-features flex">
            <button ref="input" @click="pinNote(note)" class="trans icon"><i class="fa fa-thumb-tack icon" aria-hidden="true"></i></button>
            <label class="trans icon  change-color"> <i class="fa fa-paint-brush icon" aria-hidden="true"></i>
                <input v-model="color" @change="changeColor(note)" type="color" hidden/>
            </label>
            <button class="trans icon "><i class="fa fa-envelope icon" aria-hidden="true"></i></button>
            <button @click="editNote(note)" class="trans icon "><i class="fa fa-pencil-square-o icon" aria-hidden="true"></i></button>
            <button @click="removeNote(note.id)" class="trans icon "><i class="fa fa-trash icon" aria-hidden="true"></i></button>
        </section>
        `,
        data(){
            return{
                color: null,
            }
        },
           methods:{
            removeNote(noteId){
                noteService.remove(noteId)
                    .then(() => 
                    eventBus.emit('remove',noteId))
            },
            pinNote(note){
                note.isPinned = !note.isPinned
                    noteService.save(note)
            },
            changeColor(note){
                note.style.backgroundColor = this.color
                    noteService.save(note)
            },
            editNote(note){
                this.$refs.input.focus()
                console.log(note)
            },
        },
}