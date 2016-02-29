

var arrowsPressed = Rx.Observable.fromEvent(inputField, 'keydown');

var arrows =
  arrowsPressed.map(function(arrowPressed){
    var suggestionList = document.getElementById('suggestion');
    if(arrowPressed.keyCode === 38){
      suggestionList.classList.add("otherclass");
    } else if (arrowPressed.keyCode === 40) {
      suggestionList.classList.add("otherclass2");
    }
  });

  arrows.subscribe(response => {
    console.log(response);
  });
