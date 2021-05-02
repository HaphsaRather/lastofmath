Player_1_name = localStorage.getItem("Player 1 name");
Player_2_name = localStorage.getItem("Player 2 name");

Player_1_score = 0;
Player_2_score = 0;

document.getElementById("Player_1_name").innerHTML = Player_1_name + ":";

document.getElementById("Player_2_name").innerHTML = Player_2_name + ":";

document.getElementById("Player_1_score").innerHTML = Player_1_score;

document.getElementById("Player_2_score").innerHTML = Player_2_score;

document.getElementById("Player_Question").innerHTML = "Question turn - " + Player_1_name;
document.getElementById("Player_Answer").innerHTML = "Answer turn - " + Player_2_name;


function send()
{
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    actual_answer= parseInt(number_1)* parseInt(number_2);


    question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button;

    document.getElementById(number_1).value = "";
    document.getElementById(number_2).value = "";

}

Question_Turn = "Player_1";
Answer_Turn = "Player_2";


function check() 
{
    Get_the_answer = document.getElementById("input_box").value;
    Answer = Get_the_answer.toLowerCase();
    console.log("The answer is" + Answer);

    if(Answer == actual_answer) 
    {
    if (Answer_Turn = "Player_1")
    {
        Player_1_score = Player_1_score + 1;
        document.getElementById("Player_1_score").innerHTML = Player_1_score;

                             
    }
    else
    {
        Player_2_score = Player_2_score + 1;
        document.getElementById("Player_2_score").innerHTML = Player_2_score;
 
}
if(Question_Turn == "Player_1")
{
    Question_Turn = "Player_2";
    document.getElementById("Player_Question").innerHTML = "Question Turn - " + Player_2_name;
    
    
}
else 
{
    Question_Turn = "Player_1";
    document.getElementById("Player_Question").innerHTML = "Question Turn - " + Player_1_name;
}

if(Answer_Turn == "Player_1")
{
    Answer_Turn = "Player_2";
    document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + Player_2_name;
    
    
}
else 
{
    Answer_Turn = "Player_1";
    document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + Player_1_name;
}

document.getElementById("output").innerHTML= "";
}








}
