class BeatsInfo {

    constructor(storage, player, gridMaker){
        this.numBeats = document.getElementById("numBeats");
        this.dispNumBeats = document.getElementById("dispNumBeats");
        if (storage.getVal("nB")){
            this.dispNumBeats.value = storage.getVal("nB");
            this.dispNumBeats.innerHTML = storage.getVal("nB");
            this.numBeats.value = storage.getVal("nB");
            this.numBeats.innerHTML = storage.getVal("nB");
        }
        this.numSubDivs = document.getElementById("numSubDivs");
        this.dispSubDivs = document.getElementById("dispSubDivs");
        if (storage.getVal("nS")){
            this.numSubDivs.value = storage.getVal("nS");
            this.numSubDivs.innerHTML = storage.getVal("nS");
            this.dispSubDivs.value = storage.getVal("nS");
            this.dispSubDivs.innerHTML = storage.getVal("nS");
        }
        this.tempo = document.getElementById("tempo");
        this.dispTempo = document.getElementById("dispTempo");
        if (storage.getVal("t")){
            this.tempo.value = storage.getVal("t");
            this.tempo.innerHTML = storage.getVal("t");
            this.dispTempo.value = storage.getVal("t");
            this.dispTempo.innerHTML = storage.getVal("t");
        }
        this.masterVol = document.getElementById("masterVol");
        this.dispMasterVol = document.getElementById("dispMasterVol")
        if (storage.getVal("mV")){
            this.masterVol.value = storage.getVal("mV");
            this.masterVol.innerHTML = storage.getVal("mV");
            this.dispMasterVol.value = storage.getVal("mV");
            this.dispMasterVol.innerHTML = storage.getVal("mV");
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
        this.storage.setVal("nB", this.numBeats.value);
        this.storage.saveToHash();
    }

    updateSubDivs(){
        this.dispSubDivs.innerHTML = this.numSubDivs.value;
        this.gridMaker.updateGrid.bind(this.gridMaker)(this.numBeats.value, this.numSubDivs.value);
        this.totalSteps = this.numBeats.value * this.numSubDivs.value;
        this.storage.setVal("nS", this.numSubDivs.value);
        this.storage.saveToHash();
    }

    updateTempo(){
        this.dispTempo.innerHTML = this.tempo.value;
        this.storage.setVal("t", this.tempo.value);
        this.storage.saveToHash();
    }

    updateMasterVolume(){
        this.dispMasterVol.innerHTML = this.masterVol.value;
        this.storage.setVal("mV", this.masterVol.value);
        this.storage.saveToHash();
    }

    dispHelp(){
        let helpButton = document.getElementById('helpButton');
        helpButton.classList.toggle("showHelp");
    }

}

export default BeatsInfo;
