# Rock👊, Paper🤚, Scissors✌️, Lizard🦎, Spock game🖖
### The Odin Project - Foundations 7 - Project: Rock Paper Scissors

As I take first steps into learning vanilla Javascript, I tried to broaden the assignment requirements by adding a couple of features:
- Added 'Lizard' and 'Spock' entities to RPS and refactored code so that adding new entities would be pain-free with no hardcoding required.
- Player selection can be done either by mouseclick or by key press (R - for rock, P - for paper, S - for scissors, L - for lizard, V - for Spock.). Also, added animations for buttons to show the outcome via color. Note that English layout should be selected for buttons to work.

Link to [Live Demo](https://pavsoldatov.github.io/Rock-paper-scissors/)

#### A little reminder to myself about the key takeways from this project.
##### "When you have a hammer everything becomes a ~~nail~~ string"
In this project, I tried my best to avoid hardcoding the outcomes of the game. For this purpose, I created an object for every entity that would include a name, an emoji, and an array of strings to which the parent entity looses. This allowed me to decrease the amount of code significantly, while little hardcoding was required (I do realize that my solution kind of qualifies for hardcoding too).

I also want to thank Mr [Wes Bos](https://github.com/wesbos) for his tutorials about keydown/keyup events. His solution is what I used in this project for key presses, albeit with some modifications. The modifications pertained to the fact that click and keyup events did not work very well together, because, apparently, keypress and mouseclick events invoke different objects, thus making it difficult to write a universal function that would work well with both events. For this reason, I decided to create two `instanceof` conditionals for the respective event and reassign variables according to the event fired. Also, huge thanks to [Jake Archibald](https://github.com/jakearchibald) for clarifying the way keypresses work and the difference between `event.key` and `event.code`.
