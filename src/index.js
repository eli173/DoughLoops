var subsDivsDisp = document.getElementById('dispSubDivs');
var subsDivs = document.getElementById('numSubDivs');
// disp1.innerHTML = subsDivs;

// function play() {

//     var volume = document.getElementById('vol');
//     var audio = document.getElementById('kick');
//     audio.currentTime = 0;
//     console.log(0.01 * volume.value);
//     audio.volume = 0.01*volume.value;
//     audio.play();

//     console.log("CLICKED");
//     ul = document.getElementById('kicks');
//     li = document.createElement("li");
//     li.innerHTML = "Kick";
//     li.classList.add("blue");
//     ul.appendChild(li);
// }

import Master from './classes/master.js';
import Player from './classes/player.js';

document.addEventListener("DOMContentLoaded", function () {
    let instrumentSeqs = document.querySelectorAll('#instrumentSeqs label div');
    let master = new Master();
    let player = new Player(instrumentSeqs,master);
    master.setPlayer(player);
    let stopButton = document.getElementById('stopButton');
    let startButton = document.getElementById('startButton');
    let shitButton = document.getElementById('shitButton');
    console.log(instrumentSeqs);
    stopButton.addEventListener('click', master.stop.bind(master));
    startButton.addEventListener('click', master.start.bind(master));
    setInterval(player.playInstruments.bind(player),100);
    log1(master);
});



function log1(m){
    setInterval(function(){

    },500);
}
