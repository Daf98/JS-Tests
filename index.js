//Task 1
function stringLength(string) {
    if (string.length > 1 && stringLength.length < 10) {
        return string.length;
    }
return false;
}
//Task 2
function reverseString(string) {
    let reversed = string.split("").reverse().join("");
    return reversed;

}



module.exports = {stringLength, reverseString};