class RasenDestroyer {
    zeile;
    spalte;
    energie = 15;
    constructor(z, s) {
        this.zeile = z
        this.spalte = s
        this.platziereSelbstImBild()
    }
    platziereSelbstImBild() {
        matrix[this.zeile][this.spalte] = 5
    };
    fahrNachVornee() {
        let Felder = this.findeGrasFelder()
        if (Felder.length > 1) {
            let randomNumber2 = Math.floor(Math.random() * Felder.length)
            let Feld = Felder[randomNumber2]
            matrix[this.zeile][this.spalte] = 0
            löschObyektAusObjekteArray(Feld[0], Feld[1])
            this.zeile = Feld[0]
            this.spalte = Feld[1]

            matrix[this.zeile][this.spalte] = 5
        }
    };
    spielzug() {
        //console.log(this.energie)
        if (this.energie > 30) {
            this.pflanzNeueRasenDestroyer();
            this.energie = 15
        } else if (this.energie > 0) {
            let grasFelder = this.findeGrasFelder()
            if (grasFelder.length > 0) {
                this.energie++
                this.fahrNachVornee()
            } else {

                this.energie-=2 }
        }
        else {
            // console.log("Hallo")
            matrix[this.zeile][this.spalte] = 0;
            löschObyektAusObjekteArray(this.zeile, this.spalte)
        }
    };

    pflanzNeueRasenDestroyer() {
        let grasFelder = this.findeGrasFelder()
        if (grasFelder.length > 0) {
            let grasFeld = grasFelder[0]
            löschObyektAusObjekteArray(grasFeld[0], grasFeld[1])
            let neueRasenDestroyer = new RasenDestroyer(grasFeld[0], grasFeld[1])
            ObjektArray.push(neueRasenDestroyer)
        }


    }

    findeGrasFelder() {
        let benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1]
        ]
        let grasFelder = benachbarteFelder.filter(this.istGras)
        return grasFelder
    };
    istGras(koordinatenPaar) {
        let zeile = koordinatenPaar[0]
        let spalte = koordinatenPaar[1]
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < xy &&
            spalte < xy
            && matrix[zeile][spalte] === 1) {
            return true;
        } else {
            return false;
        }
    }
}