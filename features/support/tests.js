import {mqttTest} from '../test-objects/mqttTest'
import {mqttUsersTest} from '../test-objects/mqttUsersTest'
import { mqttChatTest } from '../test-objects/mqttChatTest'
import {pages} from './pages'

export class Tests {
    constructor(pages) {

        this.mqttTest = new mqttTest(pages)
        this.mqttUsersTest = new mqttUsersTest(pages)
        this.mqttChatTest = new mqttChatTest(pages)
        
    }
}

const tests = new Tests(pages)
export {tests}