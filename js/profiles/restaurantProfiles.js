var fewtAnswers = require("../lunchify/fewtAnswers.js");
// var Rx = require('rx');

var loadRestaurants = function (){
  var profiles = document.getElementById('profiles');

  if(profiles.firstChild){
    profiles.innerHTML = '';
  }

  //TODO:30 remove duplicates
  //InProgress:0 display who voted under each restaurant

  Object.keys(fewtAnswers).forEach(function(person, i){

    var persons = fewtAnswers[person];
    setTimeout(function() {

      var profileImg = '<img src="../imgs/fork.png" alt="" />';
      profiles.innerHTML += '<li id="details">' + profileImg + '<h2>' + persons.restaurant + '</h2></li>';
    }, i * 100);

  });
};

module.exports = loadRestaurants;
