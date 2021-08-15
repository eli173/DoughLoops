class GridMaker {

    constructor(){
        this.instrumentSeqs = document.querySelectorAll('#instrumentSeqs label div');
    }

    updateGrid(numBeats,numSubDivs){
        console.log(numBeats);
        console.log(numSubDivs);
        for (let i = 0; i < this.instrumentSeqs.length; i++) {
            let instrumentSeq = this.instrumentSeqs[i];
            instrumentSeq.innerHTML = "";
            for(let j = 0; j < numBeats; j++){
                for(let k = 0; k < numSubDivs; k++){
                    var box = document.createElement("INPUT");
                    box.setAttribute("type", "checkbox");
                    instrumentSeq.appendChild(box);
                }
            }
        }
    }

}

export default GridMaker;