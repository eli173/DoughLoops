class BeatsInfo {

    constructor(player,gridMaker){
        this.numBeats = document.getElementById("numBeats");
        this.dispNumBeats = document.getElementById("dispNumBeats");
        this.numSubDivs = document.getElementById("numSubDivs");
        this.dispSubDivs = document.getElementById("dispSubDivs");
        this.tempo = document.getElementById("tempo");
        this.dispTempo = document.getElementById("dispTempo");
        this.masterVol = document.getElementById("masterVol");
        this.dispMasterVol = document.getElementById("dispMasterVol")
        this.numBeats.addEventListener("input",this.updateBeats.bind(this));
        this.numSubDivs.addEventListener("input", this.updateSubDivs.bind(this));
        this.tempo.addEventListener("input", this.updateTempo.bind(this));
        this.masterVol.addEventListener("input", this.updateMasterVolume.bind(this));
        this.player = player;
        this.gridMaker = gridMaker;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
    }

    updateBeats(){
        this.dispNumBeats.innerHTML = this.numBeats.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value,this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
    }

    updateSubDivs(){
        this.dispSubDivs.innerHTML = this.numSubDivs.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
    }

    updateTempo(){
        this.dispTempo.innerHTML = this.tempo.value;
    }

    updateMasterVolume(){
        this.dispMasterVol.innerHTML = this.masterVol.value;
    }

}

export default BeatsInfo;