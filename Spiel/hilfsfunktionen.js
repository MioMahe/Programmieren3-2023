function randomNumber(min,max){

return Math.round((Math.random())*(max-min)+min)

}
function erstelleMatrix() {
    for (let zeile = 0; zeile < xy; zeile++) {
        let neueZeile = []
        for (let spalte = 0; spalte < xy; spalte++) {
            neueZeile.push(0);
        }
        matrix.push(neueZeile);
    }
}
function matrixZeichnen() {
    let kästchenxy = 500/xy
    for (let zeile = 0; zeile < xy; zeile++) {
        for (let spalte = 0; spalte < xy; spalte++) {
            let kästchenCode = matrix[zeile][spalte]
            if (kästchenCode === 0) {
                fill("#d2be54");
            } else if (kästchenCode === 1) {
                fill("green")
            }
            else if (kästchenCode === 5){
                fill("red")
            }
            else if (kästchenCode === 4){
                fill("black")
            }
            rect(spalte*kästchenxy,zeile*kästchenxy,kästchenxy,kästchenxy);
            
        } 

    }
}
