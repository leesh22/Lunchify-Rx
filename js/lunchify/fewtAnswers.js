var Rx = require('rx');

var fewtAnswers = {
    Alicia: { answer: "yes", restaurant: "Pret" },
      Dave: { answer: "yes", restaurant: "GBK"  },
      Alex: { answer: "no",  restaurant: ""     },
   Raymond: { answer: "yes", restaurant: "GBK"  },
       Jon: { answer: "yes", restaurant: "Pret" },
    Daniel: { answer: "yes", restaurant: "Mds"  },
     Alice: { answer: "yes", restaurant: "Pret" }
};


var answerStream  = Rx.Observable.from(fewtAnswers);

module.exports = fewtAnswers;
