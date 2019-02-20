window.addeventlistener(createBoard())
/*
 * Create a list that holds all of your cards
 */
card_Arrays = ["diamond", "diamond", "paper-plane-o", "paper-plane-o", "anchor", "anchor", "bolt", "bolt", "cube", "cube", "leaf", "leaf", "bicycle", "bicycle", "bomb", "bomb"];
card_Memory = [];
flip_Cards = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

deck_Cards_ids = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
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



function createBoard(){
  flip_Cards = 0;
  var output = '';
  shuffle(card_Arrays);
  for(var i = 0; i < card_Arrays.length; i++){
    output = output + '<div id="fa fa-'+i+'" onclick="momoryFlipTile(this,\'' +card_Arrays[i]+'\')"></div>';
  }
  document.getElementById('deck').innerHTML = output
}

function flipThatCard(card, val) {
  if(card.innerHTML == "" && card_Memory.length < 2){
    card.style.background = black;
    card.innerHTML = val;
    if(card_Memory.length == 0){
      card_Memory.push(val);
      deck_Cards_ids.push(card.id);
    } else if (card_Memory.length == 1) {
      card_Memory.push(val);
      deck_Cards_ids.push(card.id);
      if(card_Memory[0] == card_Memory[1]){
        flip_Cards = flip_Cards + 2;
        //Empty back array
        card_Memory = [];
        deck_Cards_ids = [];
      }

    }
  }

}
