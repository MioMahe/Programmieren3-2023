class Lebewesen {
    constructor(z, s) {
        this.zeile = z
        this.spalte = s
        this.benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile + 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1]
        ]
    }
    WelchesFeld(ch) {
        let zeile = koordinatenPaar[0]
        let spalte = koordinatenPaar[1]
        if( zeile>=0&&
            spalte>=0&&
            zeile<xy&&
            spalte< xy
            && matrix[zeile][spalte] === 0){
            return true;
        }else {
            return false;
        }
    }
}