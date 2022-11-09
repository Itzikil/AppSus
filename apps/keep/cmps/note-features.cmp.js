export default {
    props: ['note'],
    template: `
        <section class="note-features flex">
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-thumb-tack" aria-hidden="true"></i></i></button>
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-paint-brush" aria-hidden="true"></i></button>
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-envelope" aria-hidden="true"></i></button>
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button @click="editNote(note)" class="btn trans"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </section>
        `
}