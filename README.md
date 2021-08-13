---BACKGROUND---

DoughLoops will be a simple step-sequencer that allows users to make drum beats. They will have the ability to click on a grid to add or remove sounds that will be triggered at the appropriate time when users press the “Play” button. The pattern will be played on an infinite loop until users press the “Stop” button. Users will have the ability to adjust the volume of the different drum sounds, the tempo of the loop, the length of the loop, and the subdivisions of each beat. I currently intend to use Canvas and Web Audio API, though I need a better understanding of both before I can confirm that they are the best options for this application. 

---FUNCTIONALITY AND MVPs---

With the DoughLoops step sequencer, users will be able to:

 - Start and stop their loops
 - Select squares on the step sequencer grid to create unique drum patterns
 - Edit the length of the pattern and the number of subdivisions per beat
 - Adjust the tempo of the main track and the volume of the individual instruments
 - Add audio effects to the individual instruments

 In addition, this project will include:

 - An instructions tab explaining how to use the step sequencer
 - A production README
 - Links to my LinkedIn and GitHub

---WIREFRAMES---

<img width="1440" alt="wireframe" src="https://user-images.githubusercontent.com/53061472/129284939-1d166c8a-ba06-455a-8872-33f329108ad7.png">

---TECHNOLOGIES, LIBRARIES, AND APIs---

This project will be implemented with the following technologies:
 
 - The Web Audio API to add audio effects to the drum sounds

---IMPLEMENTATION TIMELINE---

Friday afternoon and weekend: Get webpack running successfully. Create a step sequencer grid based on the user's input for the "# of beats" and "# of subdivisions" fields.

Monday: Have the step sequencer rendering audio as expected based on the state of buttons on the grid.

Tuesday: Incorporate tempo and volume adjustment features. Begin experimenting with Web Audio API.

Wednesday: Incorporate simpl audio effects from Web Audio API (such as reverb) that can optionally be applied to the individual instruments.

Thursday morning: Deploy project to GitHub.
