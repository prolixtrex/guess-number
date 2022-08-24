
function random(event) {
	event.preventDefault();
	let randomNum = document.getElementById('randomNum');
	let matched = document.getElementById('matched');
	let correct = document.getElementById('correct');
	let guessNum = document.getElementById('guessNum').value;
	// let level1 = (9999 - 1000 + 1);

	if (!guessNum) {
		alert("Input some digits");
		return false;
	} else if (/^[0-9]+$/.test(guessNum) === false) {
		alert("Invalid Input");
	} else if (guessNum.length > 3) {
		alert("Digits can not be more than 3");
	} else {
		let numbers = [0,1,2,3,4,5,6,7,8,9];

		//shuffles the number arrays
		for (var i = numbers.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = numbers[i];
			numbers[i] = numbers[j];
			numbers[j] = temp;
		}

		//cuts the first 4 part of the shuffled arrays
		let generated = numbers.slice(0,4,).join('');

		let arr = [];
		let arr2 = [];
		let arr3 =[];
		
		//converts generated number to array
		for (const item of generated) {
			arr.push(item);
		}

		//converts input number to arrey
		for (const num of guessNum) {
			arr2.push(num);
		}

		//loops through the arrays and search for input digits inside the generated numbers
		for (const items in arr) {
			for (const num in arr2) {
				if (arr[items] == arr2[num]) {
					arr3.push(arr[items]);
				}
			}
		}

		let arr4 = [...new Set(arr3)]; //prevent duplicate occurance of numbers in the arrays
		
		randomNum.innerHTML = generated;
		matched.innerHTML = arr4;
		correct.innerHTML = arr4.length;
	}
}