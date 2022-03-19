class Player {

    constructor(storage, master){
        this.instrumentSeqs = document.querySelectorAll('#instrumentSeqs label div');
        this.instrumentVols = document.querySelectorAll('#instrumentSeqs label input');
        this.instrumentLabs = document.querySelectorAll('#instrumentSeqs > label');
        this.instrumentSels = document.querySelectorAll('#instrumentSeqs > label > select');

        for (let i = 0; i < this.instrumentSels.length; i++)
        {
            let selector = this.instrumentSels[i];

            selector.addEventListener("change", function(){storage.setVal(selector.id, selector.value); storage.saveToHash();});

            if (storage.getVal(selector.id))
            {
                selector.value = storage.getVal(selector.id);
            }
        }

        for (let i = 0; i < this.instrumentVols.length; i++)
        {
            let volInput = this.instrumentVols[i];

            volInput.addEventListener("change", function(){storage.setVal(volInput.id, volInput.value); storage.saveToHash();});

            if (storage.getVal(volInput.id))
            {
                volInput.value = storage.getVal(volInput.id);
            }
            
        }

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
                this.playStep(this.step);
                if (this.step < parseInt(this.beatsInfo.numBeats.value)*parseInt(this.beatsInfo.numSubDivs.value)-1) {
                    this.step++;
                } else {
                    this.step = 0;
                }
                this.lastTime += 1000 * 60 / parseInt(this.beatsInfo.numSubDivs.value) / (parseInt(this.beatsInfo.tempo.value));
            }
        }
    }

    playStep(step) {
        for (let i = 0; i < this.instrumentSeqs.length; i++) {
            let instrumentDivs = this.instrumentSeqs[i].children;
            let instrumentBoxes = [];
            for(let divIndex = 0; divIndex < instrumentDivs.length; divIndex++){
                instrumentBoxes.push(instrumentDivs[divIndex].children[0]);
            }
            let instrumentBox = instrumentBoxes[step];
            let toHighlight = this.instrumentLabs[i].children[3].children[step];
            toHighlight.classList.add("playing");
            let toUnHighlight = this.instrumentLabs[i].children[3].children[(this.beatsInfo.totalSteps+step-1)%this.beatsInfo.totalSteps];
            toUnHighlight.classList.remove("playing");
            

            if(instrumentBox.checked){
                let audioNamePlural = this.instrumentSeqs[i].id
                let audioNameSingular = audioNamePlural.slice(0,audioNamePlural.length-1);
								var instrumentVolTagName = null;
								var audioSelectorTagName = null;
								switch(audioNamePlural) {
								case "kicks":
										instrumentVolTagName = "kV";
										audioSelectorTagName = "kS";
										break;
								case "claps":
										instrumentVolTagName = "cV";
										audioSelectorTagName = "cS";
										break;
								case "snares":
										instrumentVolTagName = "sV";
										audioSelectorTagName = "sS";
										break;
								case "hats":
										instrumentVolTagName = "hV";
										audioSelectorTagName = "hS";
										break;
								case "rims":
										instrumentVolTagName = "rV";
										audioSelectorTagName = "rS";
										break;
								case "toms":
										instrumentVolTagName = "tV";
										audioSelectorTagName = "tS";
										break;
								case "cymbals":
										instrumentVolTagName = "yV";
										audioSelectorTagName = "yS";
										break;
								case "triangles":
										instrumentVolTagName = "gV";
										audioSelectorTagName = "gS";
										break;
								default:
										instrumentVolTagName = "kV";
										audioSelectorTagName = "kS";
										break;
								}
								
                let audioName = audioNamePlural.slice(0, audioNamePlural.length-1)+'1';
                let audioSelector = document.getElementById(audioSelectorTagName);
                var audio = document.getElementById(`${audioSelector.value}`);
                var masterVol = document.getElementById('masterVol');
                var instrumentVol = document.getElementById(instrumentVolTagName);
                audio.currentTime = 0;
                audio.volume = (0.01 * masterVol.value)*(0.01 * instrumentVol.value);
                audio.play();
            }
        }
    }

    unHighlightAll(){
        for(let i = 0; i < this.instrumentLabs.length; i++){
            let toUnHighlight = this.instrumentLabs[i].children[3];
            for(let j = 0; j < toUnHighlight.children.length; j++){
                toUnHighlight.children[j].classList.remove("playing");
            }
        }
    }

}

export default Player;
