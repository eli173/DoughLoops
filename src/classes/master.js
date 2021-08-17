class Master {
    constructor() {
        this.trackPlaying = false;
    }

    stop(){
        if(this.trackPlaying){
            this.trackPlaying = false;
            this.player.unHighlightAll();
            console.log("STOP");
            console.log(this.trackPlaying);
        }
    }

    start(){
        if(!this.trackPlaying){
            this.trackPlaying = true;
            this.player.resetLastTime();
            this.player.resetStep();
            console.log("START");
            console.log(this.trackPlaying);
        }
    }

    setPlayer(player){
        this.player = player;
    }

}


export default Master;