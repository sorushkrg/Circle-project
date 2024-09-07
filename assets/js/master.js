// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const circle = document.querySelector("#circle");

// function Extract() {
// 	circle.innerHTML = "";
// 	numbers.map((number) => {
// 		const numberElement = document.createElement("div");
// 		numberElement.className = "number";
// 		numberElement.innerHTML = number;
// 		if (number % 2 === 0) {
// 			numberElement.style.backgroundColor = "black";
// 			numberElement.style.color = "white";
// 		} else {
// 			numberElement.style.backgroundColor = "white";
// 			numberElement.style.color = "black";
// 		}
// 		circle.append(numberElement);
// 	});
// }

// function moveNum(step, direction) {
// 	errorset(""); // پاکسازی خطاهای قبلی
// 	const numberInput = Number(document.querySelector("#number-input").value);
// 	const stepValue = Number(document.querySelector("#step-input").value);

// 	if (Number.isNaN(numberInput) || Number.isNaN(stepValue)) {
// 		errorset("Please enter valid numbers for both inputs");
// 		return;
// 	}

// 	const currentIndex = numbers.indexOf(numberInput);
// 	if (currentIndex === -1) {
// 		errorset("Number not found in the array");
// 		return;
// 	}

// 	if (direction === "up") {
// 		const targetIndex = currentIndex + stepValue;
// 		if (targetIndex > numbers.length - 1) {
// 			errorset("you can't move");
// 			return;
// 		}

// [numbers[currentIndex], numbers[targetIndex]] = [
// 	numbers[targetIndex],
// 	numbers[currentIndex],
// ];
// 	} else if (direction === "down") {
// 		const targetIndex = currentIndex - stepValue;
// 		if (targetIndex < 0) {
// 			errorset("you can't move");
// 			return;
// 		}
// 		[numbers[currentIndex], numbers[targetIndex]] = [
// 			numbers[targetIndex],
// 			numbers[currentIndex],
// 		];
// 	}

// 	Extract();
// }

// document.querySelector("#up-button").addEventListener("click", () => {
// 	const step = document.querySelector("#step-input").value;
// 	moveNum(step, "up");
// });

// document.querySelector("#down-button").addEventListener("click", () => {
// 	const step = document.querySelector("#step-input").value;
// 	moveNum(step, "down");
// });

// function errorset(text) {
// 	const textInput = document.querySelector("#error");
// 	textInput.textContent = text;
// 	textInput.style.color = "red";
// }

// Extract();

/*******************************************************jquery**************************************************** */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Extract() {
	$("#circle").html("");
	numbers.forEach((number, index) => {
		const div = $("<div>").addClass("number");
		div.html(number);
		if (number % 2 === 0) {
			div.css({ "background-color": "white", color: "black" });
		} else {
			div.css({ "background-color": "black", color: "white" });
		}
		$("#circle").append(div);
	});
}

function moveNum(step, direction) {
	errorset("");
	const numberInput = Number($("#number-input").val());
	const stepInput = Number($("#step-input").val());
	errorset("");
	if (Number.isNaN(numberInput) || Number.isNaN(stepInput)) {
		errorset("Please enter valid numbers for both inputs");
		return;
	}
	const currentIndex = numbers.indexOf(numberInput);
	if (currentIndex === -1) {
		errorset("Number not found in the array");
		return;
	}
	if (direction === "up") {
		const targetIndex = currentIndex + stepInput;
		if (targetIndex > numbers.length - 1) {
			errorset("you can move");
			return;
		}
		[numbers[currentIndex], numbers[targetIndex]] = [
			numbers[targetIndex],
			numbers[currentIndex],
		];
	}
	if (direction === "down") {
		const targetIndex = currentIndex - stepInput;
		if (targetIndex < 0) {
			errorset("you can move");
			return;
		}
		[numbers[currentIndex], numbers[targetIndex]] = [
			numbers[targetIndex],
			numbers[currentIndex],
		];
	}
	Extract();
}

$("#up-button").click(() => {
	const step = Number($("#step-input").val());
	moveNum(step, "up");
});
$("#down-button").click(() => {
	const step = Number($("#step-input").val());
	moveNum(step, "down");
});

function errorset(text) {
	const textInput = $("#error").text(text);
	textInput.css({ color: "red" });
}
Extract();
