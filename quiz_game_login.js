function addUser()
{

Player_1_name = document.getElementById("Player1_name_input").value;
Player_2_name = document.getElementById("Player2_name_input").value;

localStorage.setItem("Player 1 name", Player_1_name);
localStorage.setItem("Player 2 name", Player_2_name);
window.location = "game_page.html";
}



