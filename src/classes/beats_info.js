class BeatsInfo {

    constructor(player,gridMaker){
        this.numBeats = document.getElementById("numBeats");
        this.dispNumBeats = document.getElementById("dispNumBeats");
        this.numSubDivs = document.getElementById("numSubDivs");
        this.dispSubDivs = document.getElementById("dispSubDivs");
        this.tempo = document.getElementById("tempo");
        this.numBeats.addEventListener("click",this.updateBeats.bind(this));
        this.numSubDivs.addEventListener("click", this.updateSubDivs.bind(this));
        this.player = player;
        this.gridMaker = gridMaker;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
    }

    updateBeats(){
        this.dispNumBeats.innerHTML = this.numBeats.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value,this.numSubDivs.value);
    }

    updateSubDivs(){
        this.dispSubDivs.innerHTML = this.numSubDivs.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
    }

}

export default BeatsInfo;