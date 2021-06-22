import {Page} from "./basePage"

export class mqttChatPage extends Page {

    getMessageFromChat(username, receivedMessage){
        return this.browser.$(`//div[text()="${username}: ${receivedMessage}"]`)
    }
    
    getDisconnectMessageElement(){
        return this.browser.$('//div[text()="Connection to tcp://broker.mqtt.cool:1883 lost"]')
    }

    getConnectMessageElement(){
        return this.browser.$('//div[text()="Connected to the MQTT broker at tcp://broker.mqtt.cool:1883"]')
    }

    getMessageInputField(){
        return this.browser.$('#sendMessage')
    }

    getReplyButton(){
        return this.browser.$('#replyBtn')
    }
}