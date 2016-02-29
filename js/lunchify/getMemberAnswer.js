
var getAnswer = function (memberName, fewtAnswers) {

    return new Promise(function (resolve) {
        var fewtMember = fewtAnswers[memberName];
        var checkMemberGetRestaurant = (Object.keys(fewtAnswers).includes(memberName)) ? setTimeout(
          resolve, 1, fewtMember.answer === "yes"  ? fewtMember.restaurant
            : "")
            : resolve("");
    });
};

module.exports = getAnswer;
