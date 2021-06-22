import {mqttConnectionPage} from '../pageobjects/mqttConnectionPage'
import {mqttChatPage} from '../pageobjects/mqttChatPage'
import {mqttUsersPage} from '../pageobjects/mqttUsersPage'

class Pages {
    constructor() {

        this.user1 = {
            mqttChatPage: new mqttChatPage('user1'),
            mqttConnectionPage: new mqttConnectionPage('user1'),
            mqttUsersPage: new mqttUsersPage('user1')
        }

        this.user2 = {
            mqttChatPage: new mqttChatPage('user2'),
            mqttConnectionPage: new mqttConnectionPage('user2'),
            mqttUsersPage: new mqttUsersPage('user2')
        }

    }
}

const pages = new Pages()
export {pages}