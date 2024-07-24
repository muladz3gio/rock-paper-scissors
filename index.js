var choices = ['rock', 'paper', 'scissors'];

$(".buttons").click(function(event){
    var buttonid = $(this).attr("id");
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log('User Choice:', buttonid);
    console.log('Computer Choice:', computerChoice);
    var result = calculate(buttonid, computerChoice);
    
    localStorage.clear();
        var info = {
            "computerChoice": computerChoice,
            "userChoice": buttonid,
            "result": result
        };
        console.log('Storing info:', info);
        localStorage.setItem('info', JSON.stringify(info));
        window.location.href = 'second.html';
    }
);

function calculate(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        console.log("draw");
        return "draw";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("you win");
        return "win";
    } else {
        console.log("you lose");
        return "lose";
    }
}
