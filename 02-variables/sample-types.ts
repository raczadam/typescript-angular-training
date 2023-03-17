
let exampleString: string = "Example";

console.log(exampleString);

//this is not a best practice!
//(we can loose type safety)
var example2 = 6;

console.log(exampleString + example2);

let found: boolean = true;
let singleQuoteExample = 'I am a String';

console.log(found + singleQuoteExample );

console.log(`Hi ${singleQuoteExample} is this true? ${found}`);