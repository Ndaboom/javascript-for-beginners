// PROMISES in Javascript

// States (Pending,fulfilled, rejected)

let car = new Promise(function(resolve, reject){
	fuel_fulltank = true;
	if(fuel_fullTank)
	resolve()
	else
	reject()
});

car.then(function(){
	console.log("The fuel tank is full")
}).catch(function(){
    console.log("The fuel tank is not empty")
});

// Async await

let result = function(score){
	return new Promise(function(resolve,reject){
		console.log("Calculating results")
		if(score>50){
			resolve("Congratulations! You have passed")
		}else{
			reject("You have failed")
		}
	})
}

let grade = function(response){
	return new Promise(function(resolve, reject){
		console.log("Calculating your grade...")
		resolve("Your grade is A. "+ response)
	})
}

async function calculateResults(){
	const response = await result(80)
	console.log("Results received")
	const finalgrade = await grade(response)
	console.log(finalgrade)
}

//Javascript this keyword

/* Example 1 */

var value = 50

function My_function(){
	var value = 100
	// in order to access the value of value outside the function we will be using 
	console.log(this.value)
}

/* Example 2 */

const random = {
	name: "Tutorial",
	video: ["Javascript", "This", "keyword"],
	info(){
		console.log("Hi! My name is"+this.name)
		this.video.forEach(function(tag){
			console.log(this.name,tag)
		}, this)
	}
}

random.info()

/** DOM (Document Object Model ) 
 * Javascript uses DOM to create or delete elements on a web page
 * Add CSS styles to elements
 * Add user interaction by attaching event listeners, like click, submit to elements
*/





