Version 1.0 6/15/2018

***********************************************************
*The Matching Game                                        *
----------------------------------------------------------*
*Match the cards with a perfect score of 14 moves.        *
*Watch out! The more moves you make the less stars you get*
***********************************************************


CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Requirements
 * Configuration
 * Dependencies
 * Troubleshooting
 * Built with
 * Authors



INTRODUCTION

--------------------

	This game is a memory game that requires two card to match before moving to the next pair. When two cards do not match the cards will flip back to not showing. To flip the cards simply click the cards. When all the cards have been correctly matched the game will prompt with your score and time taken to finish. If, a user make under 14 moves to complete it's consided a perfect score. If, a user make over 14 moves 2 stars will show as an average score. Last, if the user makes over 24 moves it's considered a bad score.

	The game and timer will start once the webpage has been loaded. The half circle with the arrow is used to restart the game and start over. It will reset the timer, moves, and flip all cards back over to not showing. Once you have completed the game it will reset the game for you.


REQUIREMENTS

--------------------

 1. User will need the all the given files within the NewSubmission folder.
 2. Will need an installed web browser (Google Chrome is Recommended).
 3. At least 520 MB of storage



CONFIGURATION

--------------------

 **A list that holds all of the cards and moves**
  var card_arrays = ['D','D','P','P','A','A','B','B','C','C','L','L','E','E','F','F'];
  var card_memory = [];

  var deck_cards_ids = [];

  var flip_cards = 0;

  var moves = 0;

 **A Function to start a timer to time the user and game**
  function startTime()

 **A Function to increment time and update the html object either Minute or Second**
  function setTime()

 **A function to add a zero in front of a single digit number**
  function pad(val)

 **A Function to shuffle the cards**
  function deck_shuffle()

 **A function to restart the game and refresh the webpage**
  function reloadPage()

 **A Function that will shuffle the cards, Create the DIVS for the cards, loop the  flipCards Function for clicking action. This function also starts the Timer Function**
  Function createBoard()

 **A function to receive the current moves and rate the amount moves**
  function scoreRating(moves)

 **A function that's created in the createBoard() will calculate how many cards are flips  over. If, the two cards are matched keep them turned over with White Background. If, not  turn the  2 cards back over. Two cards turned over is considered a move**
  function flipThatCard(deck,val)

 **Function that notices that the cards does not match and turns cards around**
  function wrongAnswer()



DEPENDENCIES

---------------------

 **Font Awesome: https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css
 **Google Font: https://fonts.googleapis.com/css?family=Coda
 **Background Picture: /img/geometry2.png
 **Shuffle Function: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array



TROUBLESHOOTING

---------------------

 1. If cards look not correctly layed out you might be using an unsupported web browser. We  recommend using Google Chrome.

 2. If, you make a change to the code and it doesn't respond when trying to preview the  HTML, clear your cache, or save file in a different folder.



BUILT WITH

---------------------

 *HTML - Hypertext Markup Language
 *CSS - Cascading Style Sheets
 *JavaScript - Object-Oriented computer programming language
 *Qjery - Cross platform of Javascript and HTML
 *Atom - Text Editor



AUTHORS

---------------------

 *Rondell Jefferson - Initial Work - The Matching Game
