var memberDetails = require("../lunchify/fewtAnswers.js");

function submitMember(){

  var newMemberName = document.getElementById("member-name").value;
  var newMemberAnswer = document.getElementById("member-answer").value;
  var newMemberRestuarant = document.getElementById("member-restaurant").value;

  var newMember =
    memberDetails[newMemberName] = {
      answer: newMemberAnswer,
      restaurant: newMemberRestuarant
    }

  //TODO:40 save new member somewhere so there answer is counted in the tally

  return newMember;
}


module.exports = submitMember;
