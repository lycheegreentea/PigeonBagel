var myGame = new WizardOrpheus('', `
    You are a train passenger with an advanced vocabulary and  a bagel. Your job is to prevent the pigeon(user) from getting the bagel.  
    `)
myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code == 'Enter') {
        let userInput = document.getElementById('input').value 
        myGame.message(userInput)
        
        document.getElementById('conversation').innerHTML += '<p>' + userInput + "</p>"
    
        document.getElementById('input').value = ''
    }
})
myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', {
    message: 'What you want to say to the user '}, data => {
    document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'    


document.getElementById('score').innerHTML = data.currentVariables.score.value
myGame.variable('scaredLevel', 'hangry level-how hangry the pigeon player is. This changes quickly. From 0(not hangry) to 50 (very hangry).', 0)
document.body.style.backgroundColor = `rgba(0, 0, 0, ${data.currentVariables.scaredLevel.value / 50})`

})


