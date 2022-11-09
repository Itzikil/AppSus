import {noteService} from "../services/note.service.js"

export default {
    template: `
        <section class="note-app flex">
            <form @submit.prevent="addNote" class="flex note-feature pad radius">
                <input v-model="txt" type="text" placeholder="Whats on your mind" class="note-input"/>
                <p><i class="fa fa-comment-o" aria-hidden="true"></i></p>
                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                <p><i class="fa fa-youtube-play" aria-hidden="true"></i></p>
                <p><i class="fa fa-list-ul" aria-hidden="true"></i></p>
                <button>submit</button>
            </form>
        </section>
        `,
        data(){
            return{
                txt: 'whats on your mind',
            }
        },
        methods:{
            addNote(){
                var note = {
                    info:{txt : this.txt},
                    type: "note-txt"
                }
                noteService.addNote(note)
                    .then(() => this.$emit('addNote' ,note))
            }
        }
}