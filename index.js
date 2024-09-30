var srt = "Hello";
console.log(srt);
var userNameData = "Ruslan";
var userAgeData = 36;
var isBirthdayData = true;
function logBrtSmg(isBirthday, userName, userAge) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName.toUpperCase(), ", age: ").concat(userAge + 1));
    }
}
logBrtSmg(isBirthdayData, userNameData, userAgeData);
