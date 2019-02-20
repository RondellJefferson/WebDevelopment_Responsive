/*
 * Create a list that holds all of your cards
 */

var card_arrays = ['D','D','P','P','A','A','B','B','C','C','L','L','E','E','F','F'];
var card_memory = [];
var deck_cards_ids = [];
var flip_cards = 0;
var moves = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
*/

 //A function to shuffle all cards.

Array.prototype.deck_shuffle = function(){
   var i = this.length, j, temp;
   while (--i > 0) {
       j = Math.floor(Math.random() * (i+1));
       temp = this[j];
       this[j] = this[i];
       this[i] = temp;
   }
}

//A Function to refresh the webpage. To clear all content.
function reloadPage() {
  location.reload();
}
//shuffle the cards, Create the DIVS for the cards, loop the flipCards Function for clicking action.
function createBoard(){
  flip_cards = 0;
  moves = 0;
  startTime();
  //document.getElementById("myMoves").innerHTML = "0";
  //document.getElementById("gameTime").innerHTML = "00:00";
  var output = '';
    card_arrays.deck_shuffle();
  for(var i = 0; i < card_arrays.length; i++){
    output += '<div id="deck_'+i+'" onclick="flipThatCard(this,\''+card_arrays[i]+'\')"></div>';
  }

  document.getElementById('deck_cards').innerHTML = output;

}
//A function to receive the current moves and rate the moves.
function scoreRating(moves){
  var excellent = 14;
  var average = 20;
  var bad = 24;
  if (moves > excellent && moves < average){
    document.getElementById("3star").className = "fa fa-o";
  } else if (moves > average && moves < bad) {
    document.getElementById("2star").className = "fa fa-o";
  }
}
//Function will turn cards over and consider whether to keep cards turned over
function flipThatCard(deck,val) {
  if(deck.innerHTML == "" && card_memory.length < 2){
    deck.style.background = 'white';
    deck.innerHTML = val;
    if (card_memory.length == 0){
      card_memory.push(val);
      deck_cards_ids.push(deck.id);
    } else if(card_memory.length == 1){
      card_memory.push(val);
      deck_cards_ids.push(deck.id);
      if (card_memory[0] == card_memory[1]){
        flip_cards += 2;
        card_memory = [];
              deck_cards_ids = [];
        if(flip_cards == card_arrays.length){
          if (moves < 14){
            alert("Great Job! You completed With A Perfect Score 3 Stars with " + moves + " Moves and a time of " + document.getElementById("mins").innerHTML + " Minutes and " + document.getElementById("secs").innerHTML + " Seconds");
            document.getElementById('deck_cards').innerHTML = "";
            reloadPage();
          }
          else if (moves > 14 && moves < 20) {
            alert("Good Job! You completed With An Average Score 2 Stars with " + moves + " Moves and a time of " + document.getElementById("mins").innerHTML + " Minutes and " + document.getElementById("secs").innerHTML + " Seconds");
            document.getElementById('deck_cards').innerHTML = "";
            reloadPage();
          } else {
            alert("Let's Do Better Next Time :(. You completed With 1 Star with " + moves + " Moves and a time of " + document.getElementById("mins").innerHTML + " Minutes and " + document.getElementById("secs").innerHTML + " Seconds");
            document.getElementById('deck_cards').innerHTML = "";
            reloadPage();
          }
        }
      } else {
        function wrongAnswer(){
          var deck_1 = document.getElementById(deck_cards_ids[0]);
          var deck_2 = document.getElementById(deck_cards_ids[1]);
          deck_1.style.background = '#2e3d49';
                deck_1.innerHTML = "";
          deck_2.style.background = '#2e3d49';
                deck_2.innerHTML = "";
          card_memory = [];
                deck_cards_ids = [];
        }
        setTimeout(wrongAnswer, 700);
      }
      moves++;
    }
    document.getElementById("myMoves").innerHTML = moves;
    scoreRating(moves);

  }
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
