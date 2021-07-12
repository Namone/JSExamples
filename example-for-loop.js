// The problem can be solved a couple ways, but I would start by declaring the // whole array/dataset as one variable.
var myArray = [6, 2, 12, 14, -24, 5, 0];

// Then, I would probably initialize another empty array which I will use to // hold my values that I filter out of myArray.
var myFilteredArray = [];

// Then we can loop through the first array, myArray.
// This is saying, in the (), 
// 1. Initialize a variable "i" equal to 0.
// 2. While the value if "i" is less than or equal to the length of the array // (-1 to normalize the length with our "i" value.)
// 3. Add to the value of "i" after every loop end.
for(var i = 0; i <= myArray.length - 1; i++) {
	// Use the value of "i" to loop through the indexes of myArray
	var currentVal = myArray[i];

	// Check if the current value is less than, or equal to, 5. If it is, // let's skip this loop's iteration.
	if(currentVal <= 5) {
		// This keyword tells the for loop to break out of the current loop  // and skip to the next. This could be done with an if/else and is
		// a personal preference of mine.
		continue;
	}

	// If we get here, we know currentVal is greater than 5. Let's add to our
	// filtered array.
	myFilteredArray.push(currentVal);	
}

// Now, we can convert myFilteredArray to a string using Javascript's 
// built-in "join()" function.
// Optionally, you can pass an argument to add a ", " between each item in the array.
// Otherwise, there will be no formatting/spacing between the items.
// see: https://www.w3schools.com/jsref/jsref_join.asp
var output = myFilteredArray.join(", ");

alert(output);
// ...anything else you want to do with the output.