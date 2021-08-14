class Player {

    constructor(instrumentSeqs,master){
        this.instrumentSeqs = instrumentSeqs
        this.master = master;
        console.log(this.master);
        this.lastTime = Date.now();
        this.step = 0;
    }

    resetLastTime(){
        this.lastTime = Date.now()-500;
    }

    resetStep(){
        this.step = 0;
    }

    playInstruments() {
        let interval = 500;
        if(this.master.trackPlaying){
            let currentTime = Date.now();
            if (this.lastTime + interval < currentTime) {
                console.log('check');
                this.playStep(this.step);
                if (this.step < 3) {
                    this.step++;
                } else {
                    this.step = 0;
                }
                this.lastTime += interval;
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