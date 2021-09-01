class BeatsInfo {

    constructor(storage, player, gridMaker){
        this.numBeats = document.getElementById("numBeats");
        this.dispNumBeats = document.getElementById("dispNumBeats");
        if (storage.getVal("numBeats")){
            this.dispNumBeats.value = storage.getVal("numBeats");
            this.dispNumBeats.innerHTML = storage.getVal("numBeats");
            this.numBeats.value = storage.getVal("numBeats");
            this.numBeats.innerHTML = storage.getVal("numBeats");
        }
        this.numSubDivs = document.getElementById("numSubDivs");
        this.dispSubDivs = document.getElementById("dispSubDivs");
        if (storage.getVal("numSubDivs")){
            this.numSubDivs.value = storage.getVal("numSubDivs");
            this.numSubDivs.innerHTML = storage.getVal("numSubDivs");
            this.dispSubDivs.value = storage.getVal("numSubDivs");
            this.dispSubDivs.innerHTML = storage.getVal("numSubDivs");
        }
        this.tempo = document.getElementById("tempo");
        this.dispTempo = document.getElementById("dispTempo");
        if (storage.getVal("tempo")){
            this.tempo.value = storage.getVal("tempo");
            this.tempo.innerHTML = storage.getVal("tempo");
            this.dispTempo.value = storage.getVal("tempo");
            this.dispTempo.innerHTML = storage.getVal("tempo");
        }
        this.masterVol = document.getElementById("masterVol");
        this.dispMasterVol = document.getElementById("dispMasterVol")
        if (storage.getVal("masterVol")){
            this.masterVol.value = storage.getVal("masterVol");
            this.masterVol.innerHTML = storage.getVal("masterVol");
            this.dispMasterVol.value = storage.getVal("masterVol");
            this.dispMasterVol.innerHTML = storage.getVal("masterVol");
        }

        this.numBeats.addEventListener("input",this.updateBeats.bind(this));
        this.numSubDivs.addEventListener("input", this.updateSubDivs.bind(this));
        this.tempo.addEventListener("input", this.updateTempo.bind(this));
        this.masterVol.addEventListener("input", this.updateMasterVolume.bind(this));
        this.player = player;
        this.gridMaker = gridMaker;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
        this.storage = storage;
    }

    updateBeats(){
        this.dispNumBeats.innerHTML = this.numBeats.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value,this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
        this.storage.setVal("numBeats", this.numBeats.value);
        this.storage.saveToHash();
    }

    updateSubDivs(){
        this.dispSubDivs.innerHTML = this.numSubDivs.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
        this.storage.setVal("numSubDivs", this.numSubDivs.value);
        this.storage.saveToHash();
    }

    updateTempo(){
        this.dispTempo.innerHTML = this.tempo.value;
        this.storage.setVal("tempo", this.tempo.value);
        this.storage.saveToHash();
    }

    updateMasterVolume(){
        this.dispMasterVol.innerHTML = this.masterVol.value;
        this.storage.setVal("masterVol", this.masterVol.value);
        this.storage.saveToHash();
    }

    dispHelp(){
        let helpButton = document.getElementById('helpButton');
        helpButton.classList.toggle("showHelp");
    }

}

export default BeatsInfo;
