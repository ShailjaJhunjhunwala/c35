class Form{
    constructor(){

    }
    display(){
        var title = createElement("H2")
        title.html("car racing game")
        title.position(130,10)
        var input = createInput("Enter your name")
        input.position(130,160)
        var button = createButton("Play")
        button.position(250,200)
        var greating = createElement("H3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greating.html("Hello "+name)
            greating.position(130,160)
        })
    }
}