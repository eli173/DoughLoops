class Master {
    constructor() {
        this.trackPlaying = false;
    }

    stop(){
        this.trackPlaying = false;
        console.log("STOP");
        console.log(this.trackPlaying);
    }

    start(){
        this.trackPlaying = true;
        this.player.resetLastTime();
        this.player.resetStep();
        console.log("START");
        console.log(this.trackPlaying);
    }

    setPlayer(player){
        this.player = player;
    }

}


export default Master;