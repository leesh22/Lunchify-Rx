var Rx          = require('rx');
var fewtAnswers = require("../lunchify/fewtAnswers.js");

/*--------------------------------------------------------------------------- */

window.listIndex = -1;

function searchArrowNavigation() {

  var inputField   = document.getElementById('search-input');
  var arrowPressed = Rx.Observable.fromEvent(inputField, 'keyup');

  var Navigate = function(diff){
    listIndex += diff;

    var suggestionWrap   = document.getElementById('suggestions');
    var suggestionLength = suggestionWrap.children.length;

    if (listIndex >= suggestionLength) listIndex = 0;
    if (listIndex < 0) listIndex = suggestionLength - 1;

    var cssClass    = "suggestion-item-hover";
    var suggestions = [].slice.call(document.querySelectorAll(".suggestion-item") || []);

    suggestions.forEach(suggestion => { suggestion.classList.remove(cssClass);});
    suggestions[listIndex].classList.add(cssClass);
  };

  var arrows = arrowPressed.map(arrowPressed => {
    if(arrowPressed.keyCode === 40 && inputField.value.length > 0) Navigate(1);
    if(arrowPressed.keyCode === 38 && inputField.value.length > 0) Navigate(-1);
  }).subscribe();


  var enterPressed = Rx.Observable.fromEvent(inputField, 'keydown');

  var enter = enterPressed.map(enterPressed => {
    if(enterPressed.keyCode == 13 && inputField.value.length > 0){
      enterPressed.preventDefault();
      var currentListItemValue = document.getElementsByClassName('suggestion-item-hover')[0].innerHTML;
      inputField.value = currentListItemValue;
    }
  }).subscribe();

} //end of searchArrowNavigation

module.exports = searchArrowNavigation;
