import {Given,When,Then} from '@cucumber/cucumber';
import {tests} from '../support/tests'


Given("I see both users have opened the main page and connected to server", function() {
    tests.mqttTest.UsersOpenMainPageAndIsConnected()
})

When("I see that both users enter the username", function(){
    tests.mqttTest.UsersHaveEnteredUserName()
})

When("I see both user connect to the broker", function(){
    tests.mqttTest.UsersConnectToBroker()
})

When("I see that both users see themselves and each other in the Connected Users tab", function(){
    tests.mqttUsersTest.UsersSeesUsers()
})

When("I see that user1 sends any message", function(){
    tests.mqttChatTest.User1SendsMessage()
})

When("I see that user2 receive the User 1 sent message", function(){
    tests.mqttChatTest.User2ReceivesMessage()
})

When("I see that user2 sends any message", function(){
    tests.mqttChatTest.User2SendsMessage()
})

Then("I see that user1 receives the User 2 sent message", function(){
    tests.mqttChatTest.User1ReceivesMessage()
})

Then("I see that both users can disconnect and lose connection", function(){
    tests.mqttTest.UsersFullyDisconnect()
})

