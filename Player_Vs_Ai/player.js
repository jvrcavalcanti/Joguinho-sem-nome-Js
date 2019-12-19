var Player = {
    "x": 250,
    "y": 250,
    "width": 25,
    "height": 25,

    "draw": function(){
        Game.ctx.beginPath()
        Game.ctx.rect(this.x, this.y, this.width, this.height)
        Game.ctx.fillStyle = '#fcba03'
        Game.ctx.fill()
    },
    "move_right": function(){
        if(this.x < Game.canvas.width - 25)
            this.x += 25
        Enemy.next_move()
    },
    "move_left": function(){
        if(this.x > 0)
            this.x -= 25
        Enemy.next_move()
    },
    "move_up": function(){
        if(this.y > 0)
            this.y -= 25
        Enemy.next_move()
    },
    "move_down": function(){
        if(this.y < Game.canvas.height - 25)
            this.y += 25
        Enemy.next_move()
    },
    "add_point": function(){
        var span = document.getElementById("Player")
        span.innerHTML = parseInt(span.innerText) + 1
    },
    "colision": function(){
        if(this.x == Fruit.x && this.y == Fruit.y){
            Fruit.reposition()
            this.add_point()
        }
    }
}
document.addEventListener("keydown",function(e){
    // Seta baixo
    if(e.keyCode == 40){
        Player.move_down()
    }
    // Seta cima
    if(e.keyCode == 38){
        Player.move_up()
    }
    // Seta esquerda
    if(e.keyCode == 37){
        Player.move_left()
    }
    // Seta direita
    if(e.keyCode == 39){
        Player.move_right()
    }
})