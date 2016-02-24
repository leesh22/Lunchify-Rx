var Rx              = require('rx');
var fewtAnswers     = require("../lunchify/fewtAnswers.js");
var loadProfile     = require("../profiles/memberProfiles.js");
var loadRestaurants = require("../profiles/restaurantProfiles.js");
var addMember       = require("../profiles/addMember.js")
var submitMember    = require("../profiles/submitMember.js")

/*--------------------------------------------------------------------------- */

var searchLunchify  = function () {

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
        matches.take(2).reduce((accumulator, current) => {
           return accumulator += '<li id="suggestion">' + current + '</li>';
         }, '')
         .subscribe(val => { results.innerHTML = val; });
      });

    keysPressed.filter(key =>{
      return key.keyCode === 8 && inputField.value.length == 0;
    }).subscribe(val => results.innerHTML = '');

  //TODO:0 Create function so user can navigate suggestions with arrows - see arrows.js for starting point
  //TODO:10 Display as a profile rather than a list

/*--------------------------------------------------------------------------- */

  // I think this will do best in its own file as it is not a search but a click and display
  // One class, one thing rule - but will leave here for now for ease

  var teamButton = document.getElementById('team-button');
  var restaurantsButton = document.getElementById('food-button');

  //event stream of buttons clicked
  var teamButtonClicked = Rx.Observable.fromEvent(teamButton, 'click');
  var restaurantsButtonClicked = Rx.Observable.fromEvent(restaurantsButton, 'click');

  teamButtonClicked.subscribe(response =>{
    loadProfile();
    addMember();
  });

  restaurantsButtonClicked.subscribe(response =>{
    loadRestaurants();
  });

/*--------------------------------------------------------------------------- */

//adding a member, again best in its own page but ok here FOR NOW! :)

  var formbutton = document.getElementById('form-sumbit');
  var formbuttonClicked = Rx.Observable.fromEvent(formbutton, 'click');

  formbuttonClicked.subscribe(response =>{
    submitMember();
    loadProfile();
  });

} //end of window.onload

module.exports = searchLunchify;
