// var Rx = require('rx');
// var fewtAnswers = require("../lunchify/fewtAnswers.js");
// window.onload = function () {
//
// //InProgress:0 do members and restaurantsAvailable as promises!
// var members = Object.keys(fewtAnswers);
//
// var restaurantsAvailable = members.map(function(key, index) {
//     return fewtAnswers[key].restaurant;
// }).filter(function(key, index){
//   if(key !== "" && key !== undefined){ return key; }
// });
//
// /*--------------------------------------------------------------------------- */
//  function main() {
// var searchInput = document.getElementById('search-input');
// var results = document.getElementById('results');
//
//
// var keyups = Rx.Observable.fromEvent(searchInput, 'keypress');
//
// var searchResultsSets = keyups
// .map(function(event){
//   return event.target.value; // Project the text from the input
// })
// .debounce(750 /* Pause for 750ms */ )
// .distinctUntilChanged(); // Only if the value has changed
//
// var searcher = keyups.flatMapLatest(members);
//
// function clearChildren(element) {
//        while (element.firstChild) {
//            element.removeChild(element.firstChild);
//        }
//    }
//
//         var subscription = searcher.subscribe(
//             function (data) {
//                 // Append the results
//
//                 clearChildren(results);
//
//                 var result = data[1];
//                 var i, len, li;
//
//                 for (i = 0, len = result.length; i < len; i++) {
//                     li = document.createElement('li');
//                     li.innerHTML = result[i];
//                     results.appendChild(li);
//                 }
//             },
//             function (error) {
//                 // Handle any errors
//                 clearChildren(results);
//
//                 var li = document.createElement('li');
//                 li.innerHTML = 'Error: ' + error;
//                 results.appendChild(li);
//             }
//         );
//
// };
// main();
// /*--------------------------------------------------------------------------- */
// // Was just making sure I know how to play with a form, will remove soon
//
// // window.onload = function () {
// //   var searchButton = document.getElementById('search-button');
// //   searchButton.onclick = function(){
// //     var searchForm = document.getElementById('search-input');
// //     members.forEach(function(member){
// //       if(member == searchForm.value){
// //         console.log(member);
// //       }
// //     });
// //   }
// // }
//
// }
