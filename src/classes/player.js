class Player {

    constructor(instrumentSeqs){
        this.instrumentSeqs = instrumentSeqs
    }

    playInstruments() {
        let i = 0;
        let interval = 400;
        let lastTime = Date.now();
        console.log("hi");
        while (this.trackPlaying) {
            let currentTime = Date.now();
            if (lastTime + interval < currentTime) {
                this.playStep(i);
                if (i < 3) {
                    i++;
                } else {
                    i = 0;
                }
                lastTime += interval;
            }
        }
    }

    playStep(i) {
        console.log(this.instrumentSeqs);
        for (let i = 0; i < this.instrumentSeqs.length; i++) {
            console.log(this.instrumentSeqs[i]);
        }

        // let clapBoxes = clapsUl.children;

        // if (clapBoxes[i].checked) {
        //     var volume = document.getElementById('vol');
        //     var audio = document.getElementById('clap');
        //     audio.currentTime = 0;
        //     // console.log(0.01 * volume.value);
        //     audio.volume = 0.01 * volume.value;
        //     audio.play();
        // }
    }


}

export default Player;