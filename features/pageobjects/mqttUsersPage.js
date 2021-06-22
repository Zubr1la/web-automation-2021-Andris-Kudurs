import {Page} from './basePage'

export class mqttUsersPage extends Page {

    getUserNamesFromConnectedList(username){
        return this.browser.$('li=' + username)
    }

    getThemselvesFromUserList(username){
        return this.browser.$('li=' + username + ' (you)')
    }
    
}