var getAnswer      = require('./lunchify/getMemberAnswer.js');
var lunchify       = require("./lunchify/lunchify.js");
var fewtAnswers    = require("./lunchify/fewtAnswers.js");
var submitMember   = require("./profiles/submitMember.js");
var searchLunchify = require("./autocomplete/search.js");

var allResponses = Object.keys(fewtAnswers).map((name) => getAnswer(name, fewtAnswers));

window.onload = () => { searchLunchify() };

lunchify(allResponses);
