var assert = require("assert");
var getAnswer = require("../js/getMemberAnswer.js");

describe("getAnswer", function(){

  var testData = {
      Cartman: {
          answer: "yes",
          restaurant: "Nandos"
      },
      Stan: {
          answer: "yes",
          restaurant: "Mcds"
      },
      Kenny: {
          answer: "no",
          restaurant: ""
      },
      Kyle: {
          answer: "yes",
          restaurant: "Mcds"
      }
    };

  var mockResponse = getAnswer("Cartman", testData);
  var mockResponse1 = getAnswer("Stan", testData);
  var mockResponse2 = getAnswer("Kenny", testData);
  var mockResponse3 = getAnswer("Kyle", testData);

  it("Should return most chosen restaurant", function() {
    return mockResponse1.then(function(result){
      assert.equal(result, "Mcds");
    });
  });
});
