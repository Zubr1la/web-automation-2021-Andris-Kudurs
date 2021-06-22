import {pages} from '../support/pages'
import {generatedData} from './mqttTest'

export class mqttChatTest {

    User1SendsMessage(){

        pages.user1.mqttChatPage.getMessageInputField().setValue(generatedData.user1SentMessage)
        pages.user1.mqttChatPage.getReplyButton().click()

    }

    User2ReceivesMessage(){

        pages.user2.mqttChatPage.getMessageFromChat(generatedData.userName1,generatedData.user1SentMessage).waitForDisplayed()

    }

    User2SendsMessage(){

        pages.user2.mqttChatPage.getMessageInputField().setValue(generatedData.user2SentMessage)
        pages.user2.mqttChatPage.getReplyButton().click()
        
    }

    User1ReceivesMessage(){

        pages.user1.mqttChatPage.getMessageFromChat(generatedData.userName2,generatedData.user2SentMessage).waitForDisplayed()

    }


}
