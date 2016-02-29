var getAnswer       = require('./lunchify/getMemberAnswer.js');
var lunchify        = require("./lunchify/lunchify.js");
var fewtAnswers     = require("./lunchify/fewtAnswers.js");
var searchLunchify  = require("./autocomplete/search.js");
var loadProfile     = require("./profiles/memberProfiles.js");
var loadRestaurants = require("./profiles/restaurantProfiles.js");
var fs              = require('fs');

/*--------------------------------------------------------------------------- */

var allResponses = Object.keys(fewtAnswers).map((name) => getAnswer(name, fewtAnswers));

lunchify(allResponses);

window.onload = () => {
  searchLunchify();
  loadProfile.loadProfile();
  loadRestaurants();
};

// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });
