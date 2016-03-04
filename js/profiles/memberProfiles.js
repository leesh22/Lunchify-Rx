var Rx           = require('rx');
var fs           = require('fs');
var fewtAnswers  = require("../lunchify/fewtAnswers.js");

/*--------------------------------------------------------------------------- */

function saveMember(){

  var newMemberName       = document.getElementById("member-name").value;
  var newMemberAnswer     = document.getElementById("member-answer").value;
  var newMemberRestuarant = document.getElementById("member-restaurant").value;
  var profileImg          = '<img src="../imgs/user.png" alt="" />';

  var newMember = {
    answer: newMemberAnswer,
    restaurant: newMemberRestuarant
  };

  localStorage.setItem(newMemberName, JSON.stringify(newMember));

  profiles.innerHTML +=
    '<li id="details">' + profileImg + '<h2>' + newMemberName + '</h2><p>' + newMemberAnswer + '</p><p>' + newMemberRestuarant +'</p></li>';
}

function createProfile(){

    if(profiles.firstChild){ profiles.innerHTML = ''; }

    //creating elements
    var form       = '<li id="details" class="member-form">  <form class="add-member-form" id="add-member-form" action="index.html" method="post"><input type="text" name="name" id="member-name" placeholder="name"><select required id="member-answer"><option value="" disabled selected>Are you coming?</option><option value="yes">yes</option><option value="no">no</option></select>  <input type="text" name="restaurant" id="member-restaurant" placeholder="restaurant"><input type="button" name="name" value="submit" id="form-sumbit"></form></li>';
    var profileImg = '<img src="../imgs/user.png" alt="" />';

    profiles.innerHTML += form;

    Object.keys(fewtAnswers).forEach((person, i) => {
      var persons = fewtAnswers[person];
      profiles.innerHTML +=
        '<li id="details">' + profileImg + '<h2>' + person + '</h2><p>Attending?: ' + persons.answer + '</p><p>Choosen Restaurant: ' + persons.restaurant +'</p></li>';
    });

    var newMemberForm       = document.getElementById('add-member-form');
    var newMemberFormButton = document.getElementById('form-sumbit');

    Rx.Observable.fromEvent(newMemberFormButton, 'click')
      .subscribe(response => {
          saveMember();
        newMemberForm.reset();
      });
}//end of createProfile

function loadProfile() {
  //elements needed
  var teamButton = document.getElementById('team-button');
  var profiles   = document.getElementById('profiles');

  //click stream
  var teamButtonClicked = Rx.Observable.fromEvent(teamButton, 'click');

  teamButtonClicked.subscribe(response => {
    createProfile();
  });
}//end of loadProfile

module.exports = {
  createProfile : createProfile,
  loadProfile   : loadProfile
};
