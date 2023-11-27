class Fleischfresser {
    zeile;
    spalte;
    energie = 1000;
    constructor(z, s) {
        this.zeile = z
        this.spalte = s
        this.platziereSelbstImBild()
    }
    platziereSelbstImBild() {
        matrix[this.zeile][this.spalte] = 4
    };
    fahrNachVorne() {
        let grasFelder = this.findeRasenDestroyer()
        if (grasFelder.length > 1) {
            let randomNumber2 = Math.floor(Math.random() * grasFelder.length)
            let grasFeld = grasFelder[randomNumber2]
            matrix[this.zeile][this.spalte] = 0
            löschObyektAusObjekteArray(grasFeld[0], grasFeld[1])
            this.zeile = grasFeld[0]
            this.spalte = grasFeld[1]

            matrix[this.zeile][this.spalte] = 4
        }
    };
    spielzug() {
        console.log(this.energie)
        if (this.energie > 2000) {
            console.log(this.energie)
            this.pflanzNeueFleischfresser();
            this.energie = 1000
        } else if (this.energie > 0) {
            let destroyerFelder = this.findeRasenDestroyer()
            if (destroyerFelder.length > 0) {
                this.energie+=100
                this.fahrNachVorne()
            } else {

                this.energie-=10 }
        }
        else {
            
            matrix[this.zeile][this.spalte] = 0;
            löschObyektAusObjekteArray(this.zeile, this.spalte)
        }
    };

    pflanzNeueFleischfresser() {
        let destroyerFelder = this.findeRasenDestroyer()
        if (destroyerFelder.length > 0) {
           
            let destroyerFeld = destroyerFelder[0]
            löschObyektAusObjekteArray(destroyerFeld[0], destroyerFeld[1])
            let neueFleischfresser = new Fleischfresser(destroyerFeld[0], destroyerFeld[1])
            ObjektArray.push(neueFleischfresser)
        }


    }

    findeRasenDestroyer() { 
        let benachbarteFelder = [
            [this.zeile+1,this.spalte],
            [this.zeile-1,this.spalte],            
            [this.zeile,this.spalte+1],
            [this.zeile,this.spalte-1],
            [this.zeile+1,this.spalte+1],
            [this.zeile-1,this.spalte-1],
            [this.zeile+1,this.spalte-1],
            [this.zeile-1,this.spalte+1],
            [this.zeile+2,this.spalte],
            [this.zeile-2,this.spalte],            
            [this.zeile,this.spalte+2],
            [this.zeile,this.spalte-2],
            [this.zeile+2,this.spalte+1],
            [this.zeile-2,this.spalte-1],
            [this.zeile+2,this.spalte-1],
            [this.zeile-2,this.spalte+1],
            [this.zeile+2,this.spalte+2],
            [this.zeile-2,this.spalte-2],            
            [this.zeile-2,this.spalte+2],
            [this.zeile+2,this.spalte-2],
            [this.zeile+1,this.spalte+2],
            [this.zeile-1,this.spalte-2],
            [this.zeile+1,this.spalte-2],
            [this.zeile-1,this.spalte+2],
        ]
    
        let destroyerFelder = benachbarteFelder.filter(this.istRasenDestroyer)
        return destroyerFelder

    };
    istRasenDestroyer(koordinatenPaar) {
        
        let zeile = koordinatenPaar[0]
        let spalte = koordinatenPaar[1]
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < xy &&
            spalte < xy
            && matrix[zeile][spalte] === 5) {
            
            return true;
        } else {
            return false;
        }
    }
}





