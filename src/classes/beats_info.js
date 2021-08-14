class BeatsInfo {

    constructor(numBeats, dispNumBeats, numSubDivs, dispSubDivs){
        this.numBeats = numBeats;
        this.dispNumBeats = dispNumBeats;
        this.numSubDivs = numSubDivs;
        this.dispSubDivs = dispSubDivs;
        this.numBeats.addEventListener("click",this.updateBeats);
        console.log(this.numBeats);
    }

    updateBeats(){
        console.log("hi");
    }

}

export default BeatsInfo;