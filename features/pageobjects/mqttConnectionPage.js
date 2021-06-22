import {Page} from './basePage'

export class mqttConnectionPage extends Page {

    openPage() {

        this.browser.url('https://demos.mqtt.cool/chat/')
        this.browser.pause(3000)

        this.browser.execute(() => {
        
            const elemToRemove = document.querySelector(`body > a >img`);
            //const elemToRemove = document.querySelector('//a[@href="https://github.com/MQTTCool/MQTT.Cool-example-Chat-client-javascript"]');
            elemToRemove.remove();

        });

    }
  
    getSuccessfulConnectionString(){
        return this.browser.$('.text-success')
    }

    getUserNameInputField(){
        return this.browser.$('#user')
    }

    getConnectButton(){
        return this.browser.$('#connectBtn')
    }

    getDisconnectButton(){
        return this.browser.$('#disconnectBtn')
    }
}
