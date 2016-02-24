
var getAnswer = function (memberName, fewtAnswers) {
    "use strict";
    return new Promise(function (resolve) {
        var fewtMember = fewtAnswers[memberName];
        var checkMemberGetRestaurant = (Object.keys(fewtAnswers).includes(memberName))
            ? setTimeout(resolve, 1, fewtMember.answer === "yes"
                ? fewtMember.restaurant
                : "")
            : resolve("");
    });
};

module.exports = getAnswer;
