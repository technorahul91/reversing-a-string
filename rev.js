function revString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }// this for loop used for reversing the string
   
   return newString; //functin should return value otherwise it will give undefned as an o/p
}

document.getElementById("demo").innerHTML = `Reversed string is: ${revString('rahul is developer')}`;
// used Template literals for function callback