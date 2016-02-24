
var getAnswer = require('./getMemberAnswer.js');
var fewtAnswers = require("./fewtAnswers.js");
var tallyRestaurants = require("./tallyRestaurants.js");

var lunchify = function(allPromises) {
  return Promise.all(allPromises).then((allResturants) => {

      var resturantsSelected = allResturants.filter((empty) => empty !== "" && empty !== undefined);
      exports.resturantsSelected = resturantsSelected;

      var whatRestaurant = (resturantsSelected.length > 0)
          ? tallyRestaurants()
          : "No Restaurant selected";

      return whatRestaurant;

  }, function(reason) {
      console.log(reason);
  });
}

module.exports = lunchify;
