var Rx              = require('rx');
var fewtAnswers     = require("../lunchify/fewtAnswers.js");

/*--------------------------------------------------------------------------- */

//TODO: Display results as a profile rather than a list

/*----------------------------------------------------------------------------*/

function searchLunchify() {

  //elements
  var inputField  = document.getElementById('search-input');
  var results     = document.getElementById('suggestions');
  var profiles    = document.getElementById('profiles');

  // restaurants from fewtAnswers as array
  var getRestaurants = Object.keys(fewtAnswers).map((key) => { return fewtAnswers[key].restaurant; });

  //turning member and restaurant arrays into streams and merging them together
  var teamMembers           = Rx.Observable.fromArray(Object.keys(fewtAnswers));
  var restaurantsAvailable  = Rx.Observable.fromArray(getRestaurants).filter(Boolean).distinct();
  var membersAndRestaurants = Rx.Observable.merge(teamMembers,restaurantsAvailable);

  //event stream of keys pressed
  var keysPressed = Rx.Observable.fromEvent(inputField, 'keyup');

  // getting keys pressed and returning actual letters if over 0 in length
  var keysAsTyped =
    keysPressed.map(keyTyped => { return keyTyped.target.value; })
        .filter(text => { return text.length > 0; });

  //checking to see if what was typed matches members and/or restaurants
  var getMatches =
    keysAsTyped.map(typed => {
      var matches = membersAndRestaurants.filter(name => {
        return typed.toLowerCase() === name.slice(0, typed.length).toLowerCase();
      });
    return matches;
    }).distinctUntilChanged()
      .subscribe(matches => {
        matches.take(3).reduce((accumulator, current) => {
           return accumulator += '<div id="suggestion" class="suggestion-item">' + current + '</div>';
         }, '')
         .subscribe(val => { results.innerHTML = val; });
      });

    //if the input field is empty after pressing backspace clear search results
    keysPressed.filter(key => {
      return key.keyCode === 8 && inputField.value.length === 0;
    }).subscribe(val => results.innerHTML = '');

} //end of searchLunchify

module.exports = searchLunchify;
