import Master from './classes/master.js';
import Player from './classes/player.js';
import BeatsInfo from './classes/beats_info';
import GridMaker from './classes/grid_maker';
import Storage from './classes/storage.js';

document.addEventListener("DOMContentLoaded", function () {
    let storage = new Storage();
    storage.loadFromHash();
    let gridMaker = new GridMaker(storage);
    let master = new Master();
    let player = new Player(storage, master);
    let beatsInfo = new BeatsInfo(storage, player, gridMaker);
    master.setPlayer(player);
    player.setBeatsInfo(beatsInfo);
    let stopButton = document.getElementById('stopButton');
    let startButton = document.getElementById('startButton');
    let helpButton = document.getElementById('helpButton');
    stopButton.addEventListener('click', master.stop.bind(master));
    startButton.addEventListener('click', master.start.bind(master));
    helpButton.addEventListener('click',beatsInfo.dispHelp.bind(beatsInfo));
    setInterval(player.playInstruments.bind(player),1);
});
