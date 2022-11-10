import {noteService} from "../services/note.service.js"

export default {
    template: `
        <section class="note-app flex">
            <form @submit.prevent="addNote" class="flex note-feature pad radius">
                <input v-model="info.txt" type="text" placeholder="Whats on your mind" class="note-input"/>
                <i class="fa fa-comment-o" aria-hidden="true"></i>
                <i class="fa fa-picture-o" aria-hidden="true"></i>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                <i class="fa fa-list-ul" aria-hidden="true"></i>
                <button class="trans">Add</button>
            </form>
        </section>
        `,
        data(){
            return{
                info:{txt: 'whats on your mind'},
                type: null ,
            }
        },

        methods:{
            addNote(){
                var note = {
                    info:{txt : this.info.txt},
                    type: "note-txt",
                    style: {backgroundColor :  "#00d",}
                }
                noteService.save(note)
                    .then(note => {
                        this.$emit('add', note)
                    })
            }
        }
}