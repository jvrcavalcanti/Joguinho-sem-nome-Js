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
    },
    "move_left": function(){
        if(this.x > 0)
            this.x -= 25
    },
    "move_up": function(){
        if(this.y > 0)
            this.y -= 25
        
    },
    "move_down": function(){
        if(this.y < Game.canvas.height - 25)
            this.y += 25
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
    },
    "next_move": function(){
        let moves = [
            // Up
            d_two_points(this.x, Fruit.x, this.y - 25, Fruit.y),
            // Down
            d_two_points(this.x, Fruit.x, this.y + 25, Fruit.y),
            // Left
            d_two_points(this.x - 25, Fruit.x, this.y, Fruit.y),
            // Right
            d_two_points(this.x + 25, Fruit.x, this.y, Fruit.y)
        ]
        let menor = 1000000
        let id_certo
        moves.forEach(function(atual, id){
            if(atual < menor){
                menor = atual
                id_certo = id
            }
        })
        if(id_certo == 0)
            this.move_up()
        else if(id_certo == 1)
            this.move_down()
        else if(id_certo == 2)
            this.move_left()
        else
            this.move_right()
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