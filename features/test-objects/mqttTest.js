import {pages} from '../support/pages'
import {generateData} from '../support/randomizerFunctions'

const generatedData = generateData();

class mqttTest {
    UsersOpenMainPageAndIsConnected(){

        pages.user1.mqttConnectionPage.openPage()
        pages.user2.mqttConnectionPage.openPage()

        pages.user1.mqttConnectionPage.getSuccessfulConnectionString().waitForDisplayed()
        var user1Text = pages.user1.mqttConnectionPage.getSuccessfulConnectionString().getText()

        pages.user2.mqttConnectionPage.getSuccessfulConnectionString().waitForDisplayed()
        var user2Text = pages.user2.mqttConnectionPage.getSuccessfulConnectionString().getText()

        expect(user1Text).toEqual('Connected to the MQTT.Cool server')
        expect(user2Text).toEqual('Connected to the MQTT.Cool server')
       
    }

    UsersHaveEnteredUserName(){

        pages.user1.mqttConnectionPage.getUserNameInputField().setValue(generatedData.userName1) 
        pages.user2.mqttConnectionPage.getUserNameInputField().setValue(generatedData.userName2)

        expect(pages.user1.mqttConnectionPage.getUserNameInputField().getValue()).toEqual(generatedData.userName1)
        expect(pages.user2.mqttConnectionPage.getUserNameInputField().getValue()).toEqual(generatedData.userName2)

    }

    UsersConnectToBroker(){

        pages.user1.mqttConnectionPage.getConnectButton().click()
        pages.user2.mqttConnectionPage.getConnectButton().click()

        browser.pause(4000)

        pages.user1.mqttChatPage.getConnectMessageElement().waitForDisplayed()
        pages.user2.mqttChatPage.getConnectMessageElement().waitForDisplayed()

    }

    UsersFullyDisconnect(){

        pages.user1.mqttConnectionPage.getDisconnectButton().click()
        pages.user1.mqttChatPage.getDisconnectMessageElement().waitForDisplayed()

        pages.user2.mqttConnectionPage.getDisconnectButton().click()
        pages.user2.mqttChatPage.getDisconnectMessageElement().waitForDisplayed()

    }
}

module.exports = {mqttTest,generatedData}

