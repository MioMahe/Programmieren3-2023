

let seiteXY=900
let matrix = []
let xy= 100
let randomNumber1;
let randomNumber2;
let randomNumber3;
let ObjektArray = []
let rasenDestroyer;



function setup() {
    createCanvas(seiteXY,seiteXY)
    frameRate(10)
    erstelleMatrix()
    noStroke()
    ObjektArray.push(new RasenDestroyer(29,29))
    ObjektArray.push(new RasenDestroyer(28,29))
    // ObjektArray.push(new RasenDestroyer(29,28))
    // ObjektArray.push(new RasenDestroyer(27,29))
    // ObjektArray.push(new RasenDestroyer(29,27))
    ObjektArray.push(new Gras (30,30))
    ObjektArray.push(new Gras (28,28))
    ObjektArray.push(new Gras (29,28))
    ObjektArray.push(new Gras (28,29))
    setTimeout(function(){
        ObjektArray.push(new Fleischfresser(30,29))


      },10000)
    matrixZeichnen()
 
}
function draw() {
    for(let i= 0; i<ObjektArray.length;i++){
        ObjektArray[i].spielzug()
    }
    matrixZeichnen()
}

function löschObyektAusObjekteArray(zeile,spalte){
    let index = ObjektArray.findIndex(function(grasObjekt){
        if (grasObjekt.zeile === zeile && grasObjekt.spalte === spalte){
            return true
        }else return false
    })
    ObjektArray.splice(index,1)
}