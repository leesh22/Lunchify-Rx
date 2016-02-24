var assert = require("assert");
var getAnswer = require("../js/getMemberAnswer.js");
var runPromises = require("../js/lunchify.js");

describe("runPromises", function () {

   it("Should return: the most selected restaurant", function () {
     var testData = {
         Cartman: { answer: "yes", restaurant: "BK"     },
            Stan: { answer: "yes", restaurant: "BK"     },
            Kyle: { answer: "yes", restaurant: "Subway" }
       };

     var mockPromises = Object.keys(testData).map((name) => getAnswer(name, testData));
     return runPromises(mockPromises).then(function(result){
       assert.equal(result, "BK");
     });
  });

  it("all no answers should return: 'No Restaurant selected'", function () {
    var testData = {
        Cartman: { answer: "no", restaurant: "Pret" },
           Stan: { answer: "no", restaurant: "Pret" },
      };

    var mockPromises = Object.keys(testData).map((name) => getAnswer(name, testData));
    return runPromises(mockPromises).then(function(result){
      assert.equal(result, "No Restaurant selected");
    });
  });

  it("missing restaurants should return: the most selected restaurant", function () {
     var testData = {
         Cartman: { answer: "yes", restaurant: ""     },
            Stan: { answer: "yes", restaurant: "Mcds" }
       };

     var mockPromises = Object.keys(testData).map((name) => getAnswer(name, testData));
     return runPromises(mockPromises).then(function(result){
       assert.equal(result, "Mcds");
     });
  });

  it("missing answers should return: the most selected restaurant", function () {
    var testData = {
        Cartman: {                restaurant: "Mcds" },
           Stan: { answer: "yes", restaurant: "Pret" },
      };

    var mockPromises = Object.keys(testData).map((name) => getAnswer(name, testData));
    return runPromises(mockPromises).then(function(result){
      assert.equal(result, "Pret");
    });
  });

  it("a tie should return: both/all restaurants", function () {
    var testData = {
        Cartman: { answer: "yes", restaurant: "Mcds" },
           Stan: { answer: "yes", restaurant: "Pret" },
      };

    var mockPromises = Object.keys(testData).map((name) => getAnswer(name, testData));
    return runPromises(mockPromises).then(function(result){
      assert.equal(result, "Mcds,Pret");
    });
  });

  it("a tie and a clear winner should: return the winner!", function () {
    var testData = {
        Cartman: { answer: "yes", restaurant: "Mcds" },
           Stan: { answer: "yes", restaurant: "BK"   },
           Kyle: { answer: "yes", restaurant: "Pret" },
          Kenny: { answer: "yes", restaurant: "Pret" }
      };

    var mockPromises = Object.keys(testData).map((name) => getAnswer(name, testData));
    return runPromises(mockPromises).then(function(result){
      assert.equal(result, "Pret");
    });
  });

});
