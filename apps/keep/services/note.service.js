import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        isPinned: true,
        info: {
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        isPinned: false,
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n104",
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n105",
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n106",
        type: "note-todos",
        isPinned: false,
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n107",
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n108",
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n109",
        type: "note-todos",
        isPinned: false,
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    }
]

const NOTE_KEY = 'Snotes'

export const noteService = {
    query,
    get,
    save,
    remove,
}

_createNotes()

function query() {
    return storageService.query(NOTE_KEY)
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function save(note){
    if(!note.id){   
        return storageService.post(NOTE_KEY ,note , false)
    }else{
        return storageService.put(NOTE_KEY ,note , false)
    }
}

function remove(noteId){
    return storageService.remove(NOTE_KEY ,noteId)
}

function _createNotes() {
    var notes = utilService.load(NOTE_KEY)
        if (!notes || !notes.length) {
            notes = gNotes
            utilService.save(NOTE_KEY, notes)
        }
        return notes
}