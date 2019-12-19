function d_two_points(x1, x2, y1, y2){
    let cat1 = Math.pow(x1 - x2, 2)
    let cat2 = Math.pow(y1 - y2, 2)
    return Math.pow(cat1 + cat2, 1/2)
}