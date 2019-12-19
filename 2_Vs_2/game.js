var Game = {
    "canvas": document.getElementById("canvas"),
    "ctx": canvas.getContext("2d"),
    "sprinters": [],

    "update": function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.sprinters.forEach(function(element){
            element.draw()
        })
    }
}