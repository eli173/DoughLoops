var subsDivsDisp = document.getElementById('dispSubDivs');
var subsDivs = document.getElementById('numSubDivs');
// disp1.innerHTML = subsDivs;

function play() {

    var volume = document.getElementById('vol');
    var audio = document.getElementById('kick');
    audio.currentTime = 0;
    console.log(0.01 * volume.value);
    audio.volume = 0.01*volume.value;
    audio.play();

    console.log("CLICKED");
    ul = document.getElementById('kicks');
    li = document.createElement("li");
    li.innerHTML = "Kick";
    li.classList.add("blue");
    ul.appendChild(li);
}

function playTrack(){

    clapsUl = document.getElementById('claps');
    clapBoxes = clapsUl.children;
    console.log(clapsUl);
    console.log(clapBoxes);
    clapBoxes.forEach(function(clapBox){
        clapBox.checked = true;
    })

}