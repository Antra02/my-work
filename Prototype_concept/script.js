function foo() {
	console.log(typeof foo.prototype === "object");
}
foo(); 

function Dog() {

}

Dog.prototype.bark = function () {
	console.log("woof woof!!!");
}

var puppy = new Dog();
puppy.bark();
console.log(!(puppy.hasOwnProperty("bark")));

var parent = {
	foo: function() {
		console.log("Inside parent");
	}
};

var child = Object.create(parent);
child.hasOwnProperty("foo");
child.foo();


function Car() {

}

Car.prototype.drive = function() {
	console.log("I'm driving... ");
}

var benz = new Car();
benz.drive();

function Rectangle(width, height) {
	this.width= width;
	this.height= height;
}
Rectangle.prototype.area = function() {
	return this.width * this.height;
}

var rect = new Rectangle (10, 20);
console.log(`width= ${rect.width}, height= ${rect.height}. Its area= ${rect.area()}`);


function Square(length) {
	this.width = this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);

var sq = new Square(4);
console.log(`The area of the sq= ${sq.area()}`);

