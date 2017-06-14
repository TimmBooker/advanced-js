function dogMaker(name) {
	var sound = 'bark';

	return {
		getSound: function() {
			return sound;
		},
		speak: function () {
			console.log(sound);
		}
	}
}

var tim = dogMaker('Tim');
tim.speak();


// Pseudo-Classical
//
// var Animal = function(name, sound) {
// 	this.name = name;
// 	this.sound = sound;
// }

// Animal.prototype = {
// 	speak: function() {
// 		console.log(
// 			this.name + ' says: ' + this.sound
// 		);
// 	}
// }

// var Dog = function(name) {
// 	// super()
// 	this.hasTail = true;
// 	Animal.call(this, name, "Bark");
// }

// Dog.prototype = Object.create(Animal.prototype);

// var sparky = new Dog();

// sparky.hasTail = true;

// var dog = new Dog('Sparky');
// var cat = new Animal('Tim', 'Meow');

// dog.speak();
// cat.speak();


// Prototypal
//
//
// var animal = {
// 	speak: function() {
// 		console.log(this.name + ' says: ' + this.sound);
// 	}
// }

// var dog = Object.create(animal);
// dog.name = 'Sparky';
// dog.sound = 'Bark';

// var cat = Object.create(animal);
// cat.name = 'Tim';
// cat.sound = 'Meow';

// dog.speak();
// cat.speak();

