// same keys and values
function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName
	};
}

//Coomputed Property Names
let favoriteNumber = 42;
let instructor = {
	firstName: 'Colt',
	[favoriteNumber]: "That's my favorite!"
};

//Object Methods
const instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return `${this.firstName} says bye!`;
	}
};

//createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		}
	};
}
