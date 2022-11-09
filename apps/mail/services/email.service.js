import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'

const gEmails = [
    {
        id: utilService.makeId(),
        subject: ' Miss You!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: '14:46',
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: utilService.makeId(),
        subject: 'kobe kobe',
        body: 'Would love to hang up with you',
        isRead: true,
        sentAt: '14:46',
        from: 'momo@momo.com',
        to: 'baba@momo.com',
    },
    {
        id: utilService.makeId(),
        subject: 'yossi tossi!',
        body: 'Never want to see you again!',
        isRead: false,
        sentAt: '14:46',
        from: 'momo@momo.com',
        to: 'dada1@momo.com',
    },
]


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
export const emailService = {
    query,
    remove,
    save,
    get
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
_createEmails()
function _createEmails() {
    let emails = storageService.query(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = gEmails
        // console.log(emails)
        utilService.save(EMAIL_KEY, emails)
    }
    return emails
}

