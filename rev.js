function revString(str) {
    var newString = "";

    /*for loop has to be initialised to last element of an array and run upto 1st element, hence needs to be reduced..
    This for loop used for reversing the string*/

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
   
   return newString; //functin should return value otherwise it will give undefned as an o/p
}

document.getElementById("demo").innerHTML = `Reversed string is: ${revString('rahul is developer')}`;
// used Template literals for function callback