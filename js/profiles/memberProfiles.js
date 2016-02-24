var fewtAnswers = require("../lunchify/fewtAnswers.js");
// var Rx = require('rx');


var loadProfile = function () {
  var profiles = document.getElementById('profiles');

  if(profiles.firstChild){ profiles.innerHTML = ''; }

  Object.keys(fewtAnswers).forEach((person, i) => {
    var persons = fewtAnswers[person];
    var profileImg = '<img src="../imgs/user.png" alt="" />';
    setTimeout(()=> {
      profiles.innerHTML += '<li id="details">' + profileImg + '<h2>' + person + '</h2><p>' + persons.answer + '</p><p>' + persons.restaurant + '</p></li>';
    }, i * 100);
  });
}

module.exports = loadProfile;
