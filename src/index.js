import Master from './classes/master.js';
import Player from './classes/player.js';
import BeatsInfo from './classes/beats_info';
import GridMaker from './classes/grid_maker';

document.addEventListener("DOMContentLoaded", function () {
    let gridMaker = new GridMaker();
    let master = new Master();
    let player = new Player(master);
    let beatsInfo = new BeatsInfo(player,gridMaker);
    master.setPlayer(player);
    player.setBeatsInfo(beatsInfo);
    let stopButton = document.getElementById('stopButton');
    let startButton = document.getElementById('startButton');
    stopButton.addEventListener('click', master.stop.bind(master));
    startButton.addEventListener('click', master.start.bind(master));
    setInterval(player.playInstruments.bind(player),1);
});
