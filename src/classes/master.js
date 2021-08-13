class Master {
    constructor(player) {
        this.trackPlaying = false;
        this.player = player;
    }

    stop(){
        this.trackPlaying = false;
        console.log("STOP");
    }

    start(){
        this.trackPlaying = true;
        console.log("awef;awefhui");
        console.log(this.player);
        this.player.playInstruments.bind(this.player)();
    }


}


export default Master;