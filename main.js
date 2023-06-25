let color = "white";

document.addEventListener("DOMContentLoaded", function(){
	createBoard(15);
	
	let btn_popup = document.querySelector("#popup");
	btn_popup.addEventListener("click", function(){
		let size = getSize();
		createBoard(size);
	})
})

function createBoard(size){
	let board = document.querySelector(".board");

	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let numDivs = size * size;

	for(let i = 0; i < numDivs; i++){
		let div = document.createElement("div");
		div.addEventListener("mouseover", colorDiv);
		board.insertAdjacentElement("beforeend",div);
	}
}

function getSize(){
	let input = prompt("What size you want to select of board?");
	let message = document.querySelector("#message");
	if(input == ""){
		message.innerHTML = "Please write a number";
	}
	else if(input < 1 || input > 100){
		message.innerHTML = "Write a number between 1 and 100";
	}
	else{
		message.innerHTML = "You may draw";
		return input;
	}
}

function colorDiv(){
	if(color == "random"){
		this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
	}
	else if (color == "green"){
		this.style.backgroundColor = 'green'
	}
	else{
		this.style.backgroundColor = 'white'
	}
}

function setColor(colorChoice){
	color = colorChoice;
}

function resetBoard(){
	let divs = document.querySelectorAll("div")
	divs.forEach((div) => div.style.backgroundColor = "white")
}