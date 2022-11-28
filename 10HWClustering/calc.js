export default class Calc{

    constructor(zero_l, one_l, two_l){
        this.zero_l = zero_l
        this.one_l = one_l
        this.two_l = two_l
    }

    vter(){
        this.v_z = this.vt(this.zero_l)
        this.v_o = this.vt(this.one_l)
        this.v_t = this.vt(this.two_l)
    }
    outter(){
        this.out1 = this.centroid(this.zero_l,this.one_l, this.v_z, this.v_o)
        this.out2 = this.centroid(this.one_l, this.two_l, this.v_o, this.v_t)
        this.out3 = this.centroid(this.zero_l, this.two_l, this.v_z, this.v_t)
        this.intre_tsne = []
        this.intre_tsne.push(this.out1)
        this.intre_tsne.push(this.out2)
        this.intre_tsne.push(this.out3)
    }
    intrer(){
        this.intra1 = this.centroid_intra(this.zero_l, this.v_z)
        this.intra2 = this.centroid_intra(this.one_l, this.v_o)
        this.intra3 = this.centroid_intra(this.two_l, this.v_t)
        this.intra_tsne = []
        this.intra_tsne.push(this.intra1)
        this.intra_tsne.push(this.intra2)
        this.intra_tsne.push(this.intra3)
    }



    vt(array) {
        let vt_zero_x = 0
        let vt_zero_y = 0
        for(let i = 0; i < array.length; i++){
            vt_zero_x = vt_zero_x + array[i][0]
            vt_zero_y = vt_zero_y + array[i][1]
        }
        vt_zero_x = vt_zero_x / array.length
        vt_zero_y = vt_zero_y / array.length
        return [vt_zero_x, vt_zero_y]
    }

    eucDistance(a, b) {
        return a
                .map((x, i) => Math.abs( x - b[i] ) ** 2) // square the difference
                .reduce((sum, now) => sum + now) // sum
            ** (1/2)
    }
    centroid(a,b,va,vb) {
        let a1 = 0
        let b1 = 0
        for(let i = 0; i < a.length; i++){
            a1 = a1 + this.eucDistance([a[i][0], a[i][1]], vb)
            b1 = b1 + this.eucDistance([b[i][0], b[i][1]], va)
        }
        let summ = a1 + b1
        return summ / (a.length + b.length)
    }

    centroid_intra(a,va) {
        let a1 = 0
        for(let i = 0; i < a.length; i++) {
            a1 = a1 + this.eucDistance([a[i][0], a[i][1]], va)
        }
        return (2 * a1) / (a.length)
    }


}