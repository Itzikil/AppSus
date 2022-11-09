import noteList from '../cmps/note-list.cmp.js'
import { noteService } from '../services/note.service.js'

export default {
    template:`
        <section>
            <h1>Note</h1>
            <div class="flex">
                <input type="text" placeholder="Search" />
                <p><i class="fa fa-picture-o" aria-hidden="true"></i></p>
                <p><i class="fa fa-youtube-play" aria-hidden="true"></i></p>
                <p><i class="fa fa-comment-o" aria-hidden="true"></i></p>
                <p><i class="fa fa-list-ul" aria-hidden="true"></i></p>
            </div>
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
    components:{
        noteList
    }
}