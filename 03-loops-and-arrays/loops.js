for (var index = 0; index < 5; index++) {
    console.log(index);
}
//review section
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    var element = reviews[index];
    console.log(element);
    total += element;
}
var average = total / reviews.length;
console.log("Total: ".concat(total, ", average: ").concat(average));
//sports section
var sports = ["Golf", "Cricket", "Tennis", "Swimming", "Running"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    console.log(tempSport);
}
for (var key in sports) {
    console.log(key);
}
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var tempSport = sports_2[_a];
    if (tempSport == "Running") {
        console.log("My favourite sport is ".concat(tempSport));
    }
    else {
        console.log(tempSport);
    }
}
//sports.concat("Football").concat("Ice Hockey").concat("Baseball");
sports.push("Football");
//with lambda expression
sports.forEach(function (element) {
    console.log(element);
});
