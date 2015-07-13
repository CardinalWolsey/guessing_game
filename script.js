var Game = function() {
  var el
  var resultHigh
  var resultLow
  var resultCorrect
  this.count = 0;
  this.makeGuess = function(){
    this.input = prompt("Guess a number between 1 and 100.");
    this.count++;
  }
  this.answer = Math.floor(Math.random() * 99) + 1;
  this.wrong = true;

  this.play = function(){

    while(this.wrong){

      if(this.count <= 6){
        if(this.count === 0){
          this.makeGuess();
        }
        if (this.input > this.answer) {

          // *** IMPORTANT ***
          el = document.getElementsByClassName("userGuess");
          if (el.length > 0){
            var elPick = el[this.count - 1];
            console.log("elPick is" + elPick);
            elPick.innerHTML = this.input
          }

          // ***RESULT TEST***
          resultHigh = document.getElementsByClassName("userResult");
          if (resultHigh.length > 0){
            var resultPick = resultHigh[this.count -1];
            console.log("resultPick is " + resultPick);
            resultPick.innerHTML = "You guessed too high!"
          }

          this.count++;
          this.input = prompt("Guess again! You are on " + this.count + " of 7 tries.");
        }
        if (this.input < this.answer) {

          // *** IMPORTANT ***
          el = document.getElementsByClassName("userGuess");
          if (el.length > 0){
            var elPick = el[this.count - 1];
            console.log("elPick is" + elPick);
            elPick.innerHTML = this.input
          }

          // ***RESULT TEST***
          resultLow = document.getElementsByClassName("userResult");
          if (resultLow.length > 0){
            var resultPick = resultLow[this.count -1];
            console.log("resultPick is " + resultPick);
            resultPick.innerHTML = "You guessed too low!"
          }

          this.count++;
          this.input = prompt("Guess again! You are on " + this.count + " of 7 tries.");
        }
        if(this.input === this.answer.toString()){

          // *** IMPORTANT ***
          el = document.getElementsByClassName("userGuess");
          if (el.length > 0){
            var elPick = el[this.count - 1];
            console.log("elPick is" + elPick);
            elPick.innerHTML = this.input
          }

          // ***RESULT TEST***
          resultCorrect = document.getElementsByClassName("userResult");
          if (resultCorrect.length > 0){
            var resultPick = resultCorrect[this.count -1];
            console.log("resultPick is " + resultPick);
            resultPick.innerHTML = "You got it!"
          }

          this.wrong = false;
        }
      } else {
          alert("YOU RAN OUT OF TRIES! THE CORRECT NUMBER WAS " + this.answer);
          this.wrong = false;
      }
    }

  }
}

var game = new Game();
game.play();
