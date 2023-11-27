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
    WlchesFeld(ch) {
        let found = []
        for (let i in this.benachbarteFelder) {
            let z = this.benachbarteFelder[i][0];
            let z = this.benachbarteFelder[i][1];
            if (z >= 0 && z < matrix[0].length && s >= 0 && s < matrix.length) {
                if (matrix[z][s] == ch) {
                    found.push(this.benachbarteFelder[i])
                }
            }
        }
        return found
    }

}