import {pages} from '../support/pages'
import {generatedData} from './mqttTest'

export class mqttUsersTest {

    UsersSeesUsers(){

        pages.user1.mqttUsersPage.getThemselvesFromUserList(generatedData.userName1).waitForDisplayed() //if sees themselves
        pages.user2.mqttUsersPage.getThemselvesFromUserList(generatedData.userName2).waitForDisplayed()

        pages.user1.mqttUsersPage.getUserNamesFromConnectedList(generatedData.userName2).waitForDisplayed() //if sees other user
        pages.user2.mqttUsersPage.getUserNamesFromConnectedList(generatedData.userName1).waitForDisplayed()

    }

}
