class GridMaker {

    constructor(storage){
        this.instrumentSeqs = document.querySelectorAll('#instrumentSeqs label div');
        this.storage = storage;
    }

    updateGrid(numBeats,numSubDivs){
        for (let i = 0; i < this.instrumentSeqs.length; i++) {
            let instrumentSeq = this.instrumentSeqs[i];
            instrumentSeq.innerHTML = "";
            for(let j = 0; j < numBeats; j++){
                for(let k = 0; k < numSubDivs; k++){
                    var lab = document.createElement("label");
                    let uniqueID = "g" + i.toString() + j.toString() + k.toString();
                    lab.classList.add("container");
                    if(j%2==1){
                        lab.classList.add("offBeat");
                    }
                    var box = document.createElement("INPUT");
                    box.id = uniqueID;
                    box.setAttribute("type", "checkbox");
                    let storageItem = this.storage;
                    if (storageItem.getVal(uniqueID))
                    {
                        box.checked = storageItem.getVal(uniqueID);
                    }
                    box.addEventListener("change", function(){storageItem.setVal(uniqueID, this.checked?1:0); storageItem.saveToHash();});
                    var span = document.createElement("span");
                    span.classList.add("mark");
                    lab.appendChild(box);
                    lab.appendChild(span);
                    instrumentSeq.appendChild(lab);
                }
            }
        }
    }

}

export default GridMaker;
