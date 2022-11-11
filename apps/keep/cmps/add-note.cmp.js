import {noteService} from "../services/note.service.js"

export default {
    template: `
        <section class="note-app flex">
            <form @submit.prevent="addNote" class="flex note-feature pad radius">
                <input v-if="type !== 'note-video'" v-model="info.txt" type="text" :placeholder="info.txt" class="note-input"/>
                <input v-if="type ==='note-img' || type ==='note-video' " v-model="info.url" type="text" placeholder="Add URL" class="note-input"/>
                <i @click="addTxt" class="fa fa-comment-o" aria-hidden="true" class="point"></i>
                <i @click="addImg" class="fa fa-picture-o" aria-hidden="true" class="point"></i>
                <i @click="addVideo" class="fa fa-youtube-play" aria-hidden="true" class="point"></i>
                <i class="fa fa-list-ul " aria-hidden="true"></i>
                <button class="trans">Add</button>
            </form>
        </section>
        `,
        data(){
            return{
                info:{txt: 'whats on your mind',url:null,},
                type: 'note-txt' ,
            }
        },created(){
            console.log(this.type);
        },

        methods:{
            addNote(){
                var note = {
                    info:{txt : this.info.txt , url: this.info.url},
                    type: this.type,
                    style: {backgroundColor :  "#e7e7e7",},
                }
                console.log(note);
                noteService.save(note)
                    .then(note => {
                        this.$emit('add', note)
                        this.info.txt = ''
                    })
            },
            addTxt(){
                this.info.txt = 'whats on your mind'
                this.type='note-txt'
            },
            addImg(){
                this.info.txt = 'enter title'
                this.type='note-img'
            },
            addVideo(){
                this.info.txt = 'enter URL'
                this.type='note-video'
            }
        }
}