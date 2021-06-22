var userName1 = ''
var userName2 = ''
var user1SentMessage = ''
var user2SentMessage = ''

function generateText(preString,len) {

    var usernameResult = preString;

    for(var i = 0; i < len; i++){
        const random = Math.floor(Math.random() * 26);
        usernameResult += String.fromCharCode(97 + random);
    };

    return usernameResult
    
};

function generateData() {
    
    userName1 = generateText('User1_',8)
    userName2 = generateText('User2_',8)

    user1SentMessage = generateText('User1 message - ', 16)
    user2SentMessage = generateText('User2 message - ', 16)

    const generatedData = {
        userName1: userName1,
        userName2: userName2,
        user1SentMessage: user1SentMessage,
        user2SentMessage: user2SentMessage,
    }
    
    return generatedData

};

module.exports = {generateData}
//https://www.tutorialspoint.com/random-name-generator-function-in-javascript