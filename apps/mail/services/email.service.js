import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'
const USER_KEY = 'userDB'



export const emailService = {
    query,
    remove,
    save,
    get,
    queryUser, 
    showTime,
}
function queryUser() {
    return storageService.query(USER_KEY)
}
function query() {
    return storageService.query(EMAIL_KEY)
}
function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}
function save(email) {
    if (email.id) return storageService.put(EMAIL_KEY, email)
    else return storageService.post(EMAIL_KEY, email)
}
function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
}
_createUser()
_createEmails()
function _createEmails() {
    let emails = storageService.query(EMAIL_KEY)
    if (!emails || !emails.length) {
        const email = {
            body: '../keep-images/nature.jpg',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'sent',
            subject: 'Bobi and Me',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email5 = {
            body: '../keep-images/nature.jpg',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'sent',
            subject: 'Bobi and Me',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email3 = {
            body: '../keep-images/nature.jpg',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'sent',
            subject: 'Bobi and Me',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email9 = {
            body: '../keep-images/nature.jpg',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'sent',
            subject: 'Bobi and Me',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email2 = {
            body: '../keep-images/nature.jpg',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'sent',
            subject: 'Bobi and Me',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email6 = {
            body: '../keep-images/nature.jpg',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'sent',
            subject: 'Bobi and Me',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email7 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: false,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email8 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: false,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email4 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: false,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email10 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: false,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email16 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: true,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email15 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: true,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email13 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: true,
            subject: 'Work on design',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email14 = {
            body: 'If you need any help im here for not including weekend and i work only from 8am-12pm have a nice one',
            from: 'Itzhak@Shahar.thebeks',
            id: utilService.makeId(),
            isRead: true,
            isStarred: false,
            sentAt: showTime(new Date),
            status: 'inbox',
            isTrash: true,
            subject: 'Work on design',
            to: 'kobekobe@.thebeks',
        }
        const email12 = {
            body: 'Would you tell us how to make a canvas display on a note?',
            from: 'kobekobe@.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: true,
            sentAt: showTime(new Date),
            status: 'inbox',
            subject: 'Any suggestions?',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email11 = {
            body: 'Would you tell us how to make a canvas display on a note?',
            from: 'kobekobe@.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: true,
            sentAt: showTime(new Date),
            status: 'inbox',
            subject: 'Any suggestions?',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email17 = {
            body: 'Would you tell us how to make a canvas display on a note?',
            from: 'kobekobe@.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: true,
            sentAt: showTime(new Date),
            status: 'inbox',
            subject: 'Any suggestions?',
            to: 'Itzhak@Shahar.thebeks',
        }
        const email18 = {
            body: 'Would you tell us how to make a canvas display on a note?',
            from: 'kobekobe@.thebeks',
            id: utilService.makeId(),
            isRead: false,
            isStarred: true,
            sentAt: showTime(new Date),
            status: 'inbox',
            subject: 'Any suggestions?',
            to: 'Itzhak@Shahar.thebeks',
        }
        emails = [
            email,
            email2,
            email3,
            email4,
            email5,
            email6,
            email7,
            email8,
            email9,
            email10,
            email11,
            email12,
            email13,
            email14,
            email15,
            email16,
            email17,
            email18,
        ]
        // console.log(emails)
        utilService.save(EMAIL_KEY, emails)
    }
    return emails
}
function showTime(time) {
    var today = time
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()

    today = dd + '/' + mm + '/' + yyyy
    return today
}
function _createUser() {
    let loggedinUser = utilService.load(USER_KEY)
    if (!loggedinUser) {
        loggedinUser = {
            email: 'Itzhak@Shahar.thebeks',
            fullname: 'Call Me Appsus',
        }
        utilService.save(USER_KEY, loggedinUser)
    }
    return loggedinUser
}

