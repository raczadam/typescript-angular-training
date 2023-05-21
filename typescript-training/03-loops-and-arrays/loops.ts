
for (let index = 0; index < 5; index++) {
    console.log(index);
}

//review section
let reviews : number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;
for (let index = 0; index < reviews.length; index++) {
    let element: number = reviews[index]
    console.log(element);
    total += element;
}

let average: number = total / reviews.length;

console.log(`Total: ${total}, average: ${average}`);

//sports section

let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming", "Running"];

for (let tempSport of sports) {
    console.log(tempSport);
}

for (const key in sports) {
    console.log(key);
}


for (let tempSport of sports) {
    if(tempSport == "Running"){
        console.log(`My favourite sport is ${tempSport}`);
    } else{
        console.log(tempSport);
    }
}

//sports.concat("Football").concat("Ice Hockey").concat("Baseball");
sports.push("Football");

//with lambda expression
sports.forEach(element => {
    console.log(element);
});
