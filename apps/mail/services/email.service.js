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
}
function queryUser(){
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
            id: utilService.makeId(),
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            sentAt: new Date(),
            to: 'momo@momo.com',
            isStarred: false,
            isRead: true,
        }
        const email2 = {
            id: utilService.makeId(),
            subject: 'Love you!',
            body: 'Would love to hang up with you',
            sentAt: new Date(),
            to: 'baba@momo.com',
            isStarred: true,
            isRead: false,
        }
        const email3 = {
            id: utilService.makeId(),
            subject: 'Hate you!',
            body: 'Never want to see you again!',
            sentAt: new Date(),
            to: 'dada1@momo.com',
            isStarred: false,
            isRead: false,
        }
        emails = [email, email2, email3]
        // console.log(emails)
        utilService.save(EMAIL_KEY, emails)
    }
    return emails
}
function _createUser() {
    const loggedinUser = utilService.load(USER_KEY) || {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus',
    }
    return loggedinUser
}

