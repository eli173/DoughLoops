class Master {
    constructor() {
        this.trackPlaying = false;
    }

    stop(){
        if(this.trackPlaying){
            this.trackPlaying = false;
            this.player.unHighlightAll();
        }
    }

    start(){
        if(!this.trackPlaying){
            this.trackPlaying = true;
            this.player.resetLastTime();
            this.player.resetStep();
        }
    }

    setPlayer(player){
        this.player = player;
    }
}

export default Master;