
var tally = require('./lunchify.js');

function tallyRestaurants() {
    var voteResults = tally.resturantsSelected.reduce(function (numberOfVotes, Restaurant) {
        if (numberOfVotes.hasOwnProperty(Restaurant)) {
            numberOfVotes[Restaurant]++;
        } else {
            numberOfVotes[Restaurant] = 1;
        }
        return numberOfVotes;
    }, {});

    var voteResultsRestaurants = Object.keys(voteResults);

    var mostVoted = voteResultsRestaurants.reduce(function(previousValue, currentValue){
        return voteResults[previousValue] > voteResults[currentValue]
        ? previousValue
        : currentValue;
    });

    var mostVotedResult = voteResultsRestaurants.filter(function(currentValue){
      return voteResults[currentValue] == voteResults[mostVoted];
    });

    //TODO:20 ammened below to account for tie in results of tally

    //console.log(mostVotedResult);
    var finalResult = document.getElementById('results');
    finalResult.innerHTML +=  mostVotedResult;

    return mostVotedResult.toString();
}

module.exports = tallyRestaurants;
