// function setup(){
//     createCanvas(1500,1500)

// }
// let a = 0
// let i = 0
// function draw (){
//     frameRate (140)
//     clear()
//     fill (color("green"))
//     rect(i,0,100,100)
//     a++
//     frameRate (140)
//     fill (color("blue"))
//     rect(i,200,100,100)
//     i++
//     if (i>1000){
//         i = 0

//     }
//     else if (a>1000) {
//         a = 0
//     }
//     }

// let portionen = prompt("Portinen")
// let rezeptname = "Joghurtbombe"
// let zutaten = [
//     [83, "g","Naturjoghurt"],
//     [20,"g","Zucker"],
//     [0.3 ,"Becher","Sahne"],
//     [83,"g","Beeren"]
// ]
// console.log("Zutaten","für die",rezeptname,"für",portionen,"portionen")
// for (let i = 0; i<zutaten.length;i++){
// console.log("-",zutaten[i][0]*portionen,zutaten[i][1],zutaten[i][2])
// }

// let matrix = [
//     [1,1,0,1,0,0,1,1,1,1],
//     [0,0,0,1,0,0,0,0,0,0],
//     [1,0,0,1,0,1,1,1,0,1],
//     [1,0,0,0,0,0,0,0,0,1],
//     [1,0,0,0,0,0,0,0,0,0],
//     [1,0,0,0,0,1,0,0,0,1],
//     [0,0,0,0,0,1,0,0,0,1],
//     [1,1,0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,1,1,1,1,1,1]
// ];

// function istTreffer(koordinatenPaar) {
//     let zeile = koordinatenPaar[0]
//     let spalte = koordinatenPaar[1]
// 	if( zeile>=0&&
//         spalte>=0&&
//         zeile<10&&
//         spalte< 10&&
//         matrix[zeile][spalte]===1){
//         return true;
//     }else {
//         return false;
//     }
// }

// let geratenePositionen = [
//     [0,0],
//     [1,9],
//     [9,8],
//     [100,100]
// ]
// let gefiltertePositioenen = geratenePositionen.filter (istTreffer)
// console.log(gefiltertePositioenen)

// console.log(istTreffer([0,0])); 
// console.log(istTreffer([1,9])); 
// console.log(istTreffer([9,8]));

// let matrix = [
//     [1,1,0,1,0,0,1,1,1,1],
//     [0,0,0,1,0,0,0,0,0,0],
//     [1,0,0,1,0,1,1,1,0,1],
//     [1,0,0,0,0,0,0,0,0,1],
//     [1,0,0,0,0,0,0,0,0,0],
//     [1,0,0,0,0,1,0,0,0,1],
//     [0,0,0,0,0,1,0,0,0,1],
//     [1,1,0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,1,1,1,1,1,1]
// ];

// function setup(){
//     createCanvas(500,500)
//     background("#00CDFF")

// let kästchenxy = 50;
// for (let zeile = 0; zeile < 10; zeile++) {
//     for (let spalte = 0; spalte <10; spalte++) {
//         let element = matrix[zeile][spalte];
//         console.log("zeile",zeile,"spalte",spalte,"wert",element)
//         if (element === 1){
//             fill ("black")
//         }
//         else if (element === 0){
//             fill ("#00CDFF")
//         }
//         rect (spalte*kästchenxy,zeile*kästchenxy,kästchenxy,kästchenxy)
//     }
// }
// }

// let bild = [
// [3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,2,0,0],
// [3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,2,0,0,0,0,0,0,1,0,0],
// [3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
// [3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
// [3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0],
// [3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,1,1,1,1,1,1,0,2,0,0,0,0,0,0,0,2,0,1,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,0,0,1,0,0,0,0,0,0,0,0,0,2,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],
// [1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
// [1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
// [1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1],
// [1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1],
// [1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,1,1,1,1,1,1],
// [1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1],
// [1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,2,1,1,1,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,2,0,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,2,0,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,2,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,0,0,0,0,2,0,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,2,1,0,2,0,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,0,0,1,1,1,1,0,1,0,0,1,0,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,3,3,3,3,3,3,3,3,3,3],
// ]

// function setup(){
//     createCanvas(500,500)
//     background("#00CDFF")

// let kästchenxy = 10;
// for (let zeile = 0; zeile < bild.length; zeile++) {
//     for (let spalte = 0; spalte <bild.length; spalte++) {
//         let element = bild[zeile][spalte];
//         console.log("zeile",zeile,"spalte",spalte,"wert",element)
//         if (element === 0){
//             fill ("#d2be64")
//         }
//         else if (element === 1){
//             fill ("green")
//         }
//         else if (element === 2){
//             fill("red")
//         }
//         else if (element === 3){
//             fill("#00CDFF")
//         }
//         rect (spalte*kästchenxy,zeile*kästchenxy,kästchenxy,kästchenxy)
//     }
// }
// }


// let xy= 30
// let randomNumber1;
// let randomNumber2;
// let bild = []
// let rasenDestroyer = {
//     zeile:(Math.floor(Math.random()*xy)),
//     spalte:(Math.floor(Math.random()*xy)),
//     platziereSelbstImBild (){
//         bild[this.zeile][this.spalte]=4
//     },
//     fahrNachVornee(){
//         let grasFelder = this.findeGrasFelder()
//         if (grasFelder.length >0){
//             randomNumber2 = Math.floor(Math.random()*grasFelder.length)
//             let grasFeld=grasFelder[randomNumber2]
//             bild[this.zeile][this.spalte]=1
//             this.zeile=grasFeld[0]
//             this.spalte=grasFeld[1]
//             bild[this.zeile][this.spalte]=4
//         }



//     },
//     findeGrasFelder(){
//         let benachbarteFelder = [
//             [this.zeile+1,this.spalte],
//             [this.zeile-1,this.spalte],
//             [this.zeile,this.spalte+1],
//             [this.zeile,this.spalte-1]
//         ]
//         let grasFelder = benachbarteFelder.filter(this.istGras)
//         return grasFelder
//     },
//   istGras(koordinatenPaar) {
//     let zeile = koordinatenPaar[0]
//     let spalte = koordinatenPaar[1]
// 	if( zeile>=0&&
//         spalte>=0&&
//         zeile<xy&&
//         spalte< xy){
//         return true;
//     }else {
//         return false;
//     }
// }
// }

// let rasenDestroyerHacked = {
//         zeile:(Math.floor(Math.random()*xy)),
//         spalte:(Math.floor(Math.random()*xy)),
//         platziereSelbstImBild (){
//             bild[this.zeile][this.spalte]=5
//         },
//         fahrNachVorne(){
//             let Felder = this.findeFelder()
//             if (Felder.length >0){
//                 randomNumber1 = Math.floor(Math.random()*Felder.length)
//                 let Feld=Felder[randomNumber1]
//                 bild[this.zeile][this.spalte]=0
//                 this.zeile=Feld[0]
//                 this.spalte=Feld[1]
//                 bild[this.zeile][this.spalte]=5
//             }
    
    
    
//         },
//         findeFelder(){
//             let benachbarteFelder = [
//                 [this.zeile+1,this.spalte],
//                 [this.zeile-1,this.spalte],
//                 [this.zeile,this.spalte+1],
//                 [this.zeile,this.spalte-1]
//             ]
//             let Felder = benachbarteFelder.filter(this.istGras)
//             return Felder
//         },
//       istGras(koordinatenPaar) {
//         let zeile = koordinatenPaar[0]
//         let spalte = koordinatenPaar[1]
//     	if( zeile>=0&&
//             spalte>=0&&
//             zeile<xy&&
//             spalte< xy){
//             return true;
//         }else {
//             return false;
//         }
//     }
//     }
    
    





// function erstelleBild() {
//     for (let zeile = 0; zeile < xy; zeile++) {
//         let neueZeile = []
//         for (let spalte = 0; spalte < xy; spalte++) {
//             neueZeile.push(1);
//         }
//         bild.push(neueZeile);
//     }
// }
// function bildZeichnen() {
//     let kästchenxy = 500/xy
//     for (let zeile = 0; zeile < xy; zeile++) {
//         for (let spalte = 0; spalte < xy; spalte++) {
//             let kästchenCode = bild[zeile][spalte]
//             if (kästchenCode === 1) {
//                 fill("#B47800");
//             } else if (kästchenCode === 0) {
//                 fill("green")
//             }
//             else if (kästchenCode === 5){
//                 fill("#434349")
//             }
//             else if (kästchenCode === 4){
//                 fill("red")
//             }
//             rect(spalte*kästchenxy,zeile*kästchenxy,kästchenxy,kästchenxy);
            
//         } 

//     }
// }



// function setup() {
//     createCanvas(500,500)
//     frameRate(60)
//     erstelleBild()
//     noStroke()
//     rasenDestroyerHacked.platziereSelbstImBild()
//     rasenDestroyer.platziereSelbstImBild()
//     rasenDestroyerHacked.findeFelder()
//     rasenDestroyer.findeGrasFelder()
// }
// function draw() {
//     bildZeichnen()
//     rasenDestroyerHacked.fahrNachVorne()
//     rasenDestroyer.fahrNachVornee()
// }