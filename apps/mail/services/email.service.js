import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'

const mail = {
    id: 'e101',
    subject: ' Miss You!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: 'momo@momo.com',
    to: 'user@appsus.com'
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
export const emailService={
    query,
    remove,
    save,
    get
}
function query(){
    return storageService.query(EMAIL_KEY)
}
function remove(){
    return storageService.remove(EMAIL_KEY,emailId)
}
function save(email){
    if(email.id) return storageService.put(EMAIL_KEY,email)
    else return storageService.post(EMAIL_KEY,email)
}
function get(emailId){
    return storageService.get(EMAIL_KEY,emailId)
}

