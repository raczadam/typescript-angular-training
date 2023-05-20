import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);

console.log(myShape.getInfo());
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 5);

console.log(myRectangle.getInfo());

//declare an array of shapes
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}