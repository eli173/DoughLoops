class Player {

    constructor(master){
        this.instrumentSeqs = document.querySelectorAll('#instrumentSeqs label div');
        this.master = master;
        this.lastTime = Date.now();
        this.step = 0;
    }

    setBeatsInfo(beatsInfo){
        this.beatsInfo = beatsInfo;
    }

    resetLastTime(){
        // console.log(this.beatsInfo.tempo.value);
        this.lastTime = Date.now() - parseInt(this.beatsInfo.tempo.value);
    }

    resetStep(){
        this.step = 0;
    }

    playInstruments() {
        // let interval = 500;
        let interval = parseInt(this.beatsInfo.tempo.value);
        // console.log(interval);
        if(this.master.trackPlaying){
            let currentTime = Date.now();

            // console.log(this.lastTime);
            // console.log(currentTime);
            // console.log(typeof (currentTime+interval));

            if (this.lastTime + interval < currentTime) {
                console.log('check');
                this.playStep(this.step);
                if (this.step < parseInt(this.beatsInfo.numBeats.value)*parseInt(this.beatsInfo.numSubDivs.value)-1) {
                    this.step++;
                } else {
                    this.step = 0;
                }
                console.log(this.step)
                this.lastTime += parseInt(this.beatsInfo.tempo.value);
            }
        }
    }

    playStep(step) {
        for (let i = 0; i < this.instrumentSeqs.length; i++) {
            let instrumentBoxes = this.instrumentSeqs[i].children;
            let instrumentBox = instrumentBoxes[step];
            if(instrumentBox.checked){
                let audioNamePlural = this.instrumentSeqs[i].id
                let audioName = audioNamePlural.slice(0, audioNamePlural.length-1)+'1';
                console.log(audioName);
                var audio = document.getElementById(audioName);
                var vol = document.getElementById('vol');
                audio.currentTime = 0;
                audio.volume = 0.01 * vol.value;
                audio.play();
            }
        }
    }
}

export default Player;