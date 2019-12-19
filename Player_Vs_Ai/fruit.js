x_possibles = []
y_possibles = []

for(let i = 0; i <= 475; i+=25){
    x_possibles.push(i)
    y_possibles.push(i)
}

var Fruit = {
    "x": 0,
    "y": 0,
    "width": 25,
    "height": 25,

    "draw": function(){
        Game.ctx.beginPath()
        Game.ctx.rect(this.x, this.y, this.width, this.height)
        Game.ctx.fillStyle = '#009105'
        Game.ctx.fill()
    },
    "reposition": function(){
        Fruit.x = x_possibles[parseInt(Math.random() * 20)]
        Fruit.y = y_possibles[parseInt(Math.random() * 20)]
    }
}