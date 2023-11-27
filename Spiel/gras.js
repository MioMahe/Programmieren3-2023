class Gras  {
    zeile;
    spalte;
    energie=0;
    constructor(z,s){
        this.zeile=z
        this.spalte=s
        this.platziereSelbstImMatrix()
    }
    platziereSelbstImMatrix (){
        matrix[this.zeile][this.spalte]=1
    };
    spielzug(){
        this.energie++
        if( this.energie > 4){
            this.pflanzNeueGrasZelle();
            this.energie=0
        }//else {this.energie++}
    };
    pflanzNeueGrasZelle(){
        let WelchesFeld = this.WelchesFeld()
        if (erdeFelder.length >0){
            randomNumber1 = Math.floor(Math.random()*erdeFelder.length)
            let erdeFeld=erdeFelder[randomNumber1]
            let pflazNeueGrasZelle= new Gras (erdeFeld[0],erdeFeld[1])
            ObjektArray.push(pflazNeueGrasZelle)
        }
    };
//     findeErdeFelder(){
//         let benachbarteFelder = [
//             [this.zeile+1,this.spalte],
//             [this.zeile-1,this.spalte],
//             [this.zeile,this.spalte+1],
//             [this.zeile,this.spalte-1]
//         ]
//         let erdeFelder = benachbarteFelder.filter(this.istErde)
//         return erdeFelder
//     };
//   istErde(koordinatenPaar) {
//     let zeile = koordinatenPaar[0]
//     let spalte = koordinatenPaar[1]
// 	if( zeile>=0&&
//         spalte>=0&&
//         zeile<xy&&
//         spalte< xy
//         && matrix[zeile][spalte] === 0){
//         return true;
//     }else {
//         return false;
//     }
// }
}