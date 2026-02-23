//1. Case1

//The problem was that the loop was infinite.

const arrNumbers = [1, 2, 3, 5];

function mystery1(arr) {
	let i = 0;
	while (i < arr.length) {
		if (arr[i] % 2 === 0) {
			return true;
		}
		//here the solution
		i++;
	}
	return false;
}

console.log(mystery1(arrNumbers));

//1.The function take an argument as array.
//2. Inside the function, we have the while's loop that should iterate through all the elements of the array.
//3. Inside the while's loop, check if an element is even.
//4. If it finds an even number, it immediately returns true.
//5. If it finishes traversing the array and does not find any pair, it returns false

//--------------------------------------------------------------------------------------------------------------

//Case 2

//Change the name of Function
function makeStringReverse(str) {
	//create a new variable
	let stringReverse = str.split("").reverse().join("");
	// check if stringReverse is equal to str
	if (stringReverse == str) {
		return true;
	}
}

//-------------------------------------------------------------------------------------------------------------

//Case 3
function complicatedCalc(a, b) {
	let x = a;
	let y = b;
	for (let i = 0; i < b; i++) {
		x = x + 1;
		y = y - 1;
	}
	return x;
}

// la variable no afecta a nada que este afuera del bucle asiquel calculo que importa x = x + 1 lo cual es una simple suma

//Refactorizada
function complicatedCalc(a, b) {
	return a + b;
}
