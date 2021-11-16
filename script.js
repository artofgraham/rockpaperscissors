var btn = document.getElementById("btn"), result = document.getElementById("result");
btn.addEventListener("click", compare);
function compare(){
	var user = prompt("Enter your choice: Rock, paper or scissors!");
	user = user.toLowerCase();
	var computer = Math.random() * 10 + 1;
	computer = Math.round(computer);
	console.log(computer);
	if(computer < 3){
		computer = "rock";
	} else if(computer <= 6){
		computer = "paper";
	} else{
		computer = "scissors";
	}
	if(user == "rock"){
		if(computer == "paper"){
			result.innerHTML = "<strong>Paper wins!</strong><br><br>You chose: " + user + ".<br>The computer chose: " + computer + ".";
		} else if(computer == "rock"){
			result.innerHTML = "It's a tie!";
		}
	} else if(user == "paper"){
		if(computer == "scissors"){
			result.innerHTML = "<strong>Scissors wins!</strong><br><br>You chose: " + user + ".<br>The computer chose: " + computer + ".";
		} else if(computer == "paper"){
			result.innerHTML = "It's a tie!";
		}
	} else if(user == "scissors"){
		if(computer == "rock"){
			result.innerHTML = "<strong>Rock wins!</strong><br><br>You chose: " + user + ".<br>The computer chose: " + computer + ".";
		} else if(computer == "scissors"){
			result.innerHTML = "It's a tie!";
		}
	} else{
		result.innerHTML = "Invalid input! Please try again.";
	}
}
