
var playing = false;
var score;
var timeremaining;
var correctans;

document.getElementById("startReset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        show("timer")
        timeremaining = 60;
        document.getElementById("timervalue").innerHTML = timeremaining;

        //hide game over box
        hide("gameover");

        //change button to reset.
        document.getElementById("startReset").innerHTML ="Reset Game";

        //start count down.
        startCountDown();
        generateQA();

        //generate a new question and answer
        
    }
}

function startCountDown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timervalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCounter();
            show("gameover")
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score : " + score + "</p>";
            hide("timer");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startReset").innerHTML = "Start Game";
        }
    },1000)
}
function stopCounter(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
    var x = 1 + Math.round( 9 * (Math.random()));
    var y = 1 + Math.round( 9 * (Math.random()));
    correctans = x * y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctpos = 1 + Math.round( 3 * (Math.random()));
    document.getElementById("ans" + correctpos).innerHTML = correctans;

    var answers = [correctans];
    for(i=1; i<5; i++){
        if (i !== correctpos){
            var wrongans;
            do{
                wrongans = (1 + Math.round( 9 * Math.random())) * (1 + Math.round( 9 * Math.random()));
            }while(answers.indexOf(wrongans) > -1)

            document.getElementById("ans" + i).innerHTML = wrongans;
            answers.push(wrongans);
        }
    }
}

for(i=1; i<5; i++){

    document.getElementById("ans" + i).onclick = function(){
        if(playing == true){
        //if answer is correct.
        if(this.innerHTML == correctans){
            score++;
            //increase score and change innerHTML 
            document.getElementById("scoreValue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct")
            setTimeout(function(){
                hide("correct")
            }, 1000)
            //generate new question only if answer is correct
            generateQA();
        }else{
            //if answer is wrong 
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong")
            }, 1000)
            
        }
    }
}
}