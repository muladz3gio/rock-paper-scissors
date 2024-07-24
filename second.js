const info = JSON.parse(localStorage.getItem('info'));

var bodyclass = info["result"] + 'body';

$("body").toggleClass(bodyclass)
if(info["result"] === "win"){
    $("h1").text("You beat computer with, " + info["userChoice"] + ". And the computer Chose: " + info["computerChoice"]);
}
if(info["result"] === "draw"){
    $("h1").text("You both chose: " + info["userChoice"]);
}
if(info["result"] === "lose"){
    $("h1").text("You lost to computer with: " + info["userChoice"] + ". And the computer Chose: " + info["computerChoice"]);
}