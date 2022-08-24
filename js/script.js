
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
	} else if (guessNum.length > 4) {
		alert("Digits can not be more than 4");
	} else {
		let numbers = [0,1,2,3,4,5,6,7,8,9];
		for (var i = numbers.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = numbers[i];
			numbers[i] = numbers[j];
			numbers[j] = temp;
		}

		let generated = numbers.slice(0,4,).join('');

		let arr = [];
		let arr2 = [];
		let arr3 =[];
		
		for (const item of generated) {
			arr.push(item);
		}

		for (const num of guessNum) {
			arr2.push(num);
		}


		for (const items in arr) {
			for (const num in arr2) {
				if (arr[items] == arr2[num]) {
					arr3.push(arr[items]);
				}
			}
		}
		let arr4 = [...new Set(arr3)];
		randomNum.innerHTML = generated;
		matched.innerHTML = arr4;
		correct.innerHTML = arr4.length;
	}
}