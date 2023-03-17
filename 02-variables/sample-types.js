var exampleString = "Example";
console.log(exampleString);
//this is not a best practice!
//(we can loose type safety)
var example2 = 6;
console.log(exampleString + example2);
var found = true;
var singleQuoteExample = 'I am a String';
console.log(found + singleQuoteExample);
console.log("Hi ".concat(singleQuoteExample, " is this true? ").concat(found));
