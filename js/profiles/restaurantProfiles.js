var Rx          = require('rx');
var fewtAnswers = require("../lunchify/fewtAnswers.js");

/*--------------------------------------------------------------------------- */

var loadRestaurants = function (){
  //elements needed
  var restaurantsButton = document.getElementById('food-button');
  var profiles          = document.getElementById('profiles');
  var testProfile       = document.getElementById('test-results');
  var profileImg        = '<img src="../imgs/fork.png" alt="" />';

  //click stream
  var restaurantsButtonClicked = Rx.Observable.fromEvent(restaurantsButton, 'click');

  var whoVotedForWhatRestaurant = function(){
    return Object.keys(fewtAnswers).reduce((accumulator, current) => {
      var restaurant = fewtAnswers[current].restaurant;
      if (accumulator.hasOwnProperty(restaurant)) {
          accumulator[restaurant].push(current);
      } else {
        accumulator[restaurant] = [current];
      }
      return accumulator;
    }, {});
  };

  var whoVoted = whoVotedForWhatRestaurant();

  var createRestaurantProfile = function(){
   Object.keys(whoVoted).map(restaurants => {
      if (restaurants !== '') {
        profiles.innerHTML += '<li id="details">' + profileImg + '<h2>' + restaurants + '</h2><p>'+ whoVoted[restaurants].join(', ') +'</p></li>';
      }
    });
  };

  restaurantsButtonClicked.subscribe(response => {
    createRestaurantProfile();
  });

};//end of loadRestaurants

module.exports = loadRestaurants;
