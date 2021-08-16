class Player {

    constructor(master){
        this.instrumentSeqs = document.querySelectorAll('#instrumentSeqs label div');
        this.instrumentVols = document.querySelectorAll('#instrumentSeqs label input')
        this.master = master;
        this.lastTime = Date.now();
        this.step = 0;
    }

    setBeatsInfo(beatsInfo){
        this.beatsInfo = beatsInfo;
    }

    resetLastTime(){
        let interval = 1000 * 60 / parseInt(this.beatsInfo.numSubDivs.value) / (parseInt(this.beatsInfo.tempo.value));
        this.lastTime = Date.now() - interval;
    }

    resetStep(){
        this.step = 0;
    }

    playInstruments() {
        let interval = 1000 * 60 / parseInt(this.beatsInfo.numSubDivs.value) / (parseInt(this.beatsInfo.tempo.value));
        if(this.master.trackPlaying){
            let currentTime = Date.now();
            if (this.lastTime + interval < currentTime) {
                console.log('check');
                this.playStep(this.step);
                if (this.step < parseInt(this.beatsInfo.numBeats.value)*parseInt(this.beatsInfo.numSubDivs.value)-1) {
                    this.step++;
                } else {
                    this.step = 0;
                }
                console.log(this.step)
                this.lastTime += 1000 * 60 / parseInt(this.beatsInfo.numSubDivs.value) / (parseInt(this.beatsInfo.tempo.value));
            }
        }
    }

    playStep(step) {
        for (let i = 0; i < this.instrumentSeqs.length; i++) {
            let instrumentBoxes = this.instrumentSeqs[i].children;
            let instrumentBox = instrumentBoxes[step];
            if(instrumentBox.checked){
                let audioNamePlural = this.instrumentSeqs[i].id
                let audioNameSingular = audioNamePlural.slice(0,audioNamePlural.length-1);
                let audioName = audioNamePlural.slice(0, audioNamePlural.length-1)+'1';
                let audioSelector = document.getElementById(`${audioNameSingular}Selector`);
                var audio = document.getElementById(`${audioSelector.value}`);
                var masterVol = document.getElementById('masterVol');
                var instrumentVol = document.getElementById(`${audioNameSingular}Vol`);
                audio.currentTime = 0;
                audio.volume = (0.01 * masterVol.value)*(0.01 * instrumentVol.value);
                audio.play();
            }
        }
    }

}

export default Player;