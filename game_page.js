player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question-turn").innerHTML="Question Turn-"+player1_name;
document.getElementById("answer-turn").innerHTML="Answer Turn-"+player2_name;

function send(){
    get_word=document.getElementById("word").value
    word=get_word.toLowerCase()
    console.log(word);

    second_letter=word.charAt(1);
    console.log(second_letter);

    middle_index=Math.floor(word.length/2);

    middle_letter=word.charAt(middle_index);
    console.log(middle_letter);

    last_index=word.length-1;
    last_letter=word.charAt(last_index);
    console.log(last_letter)

    remove_secondletter=word.replace(second_letter,"_");
    remove_middleletter=remove_secondletter.replace(middle_letter,"_");
    remove_lastletter=remove_middleletter.replace(last_letter,"_");
    console.log(remove_lastletter);

    questionword="<h4 id='word_display'>Q."+remove_lastletter+"</h4>";
    input_box="<br> answer;<input type='text' id='input_check_box'>";

    check="<br> <button class='btn btn-info' onclick='check()'> check </button>"

    row=questionword+input_box+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer==word)
     {
     if(answer_turn=="player1")
     {
         player1_score=player1_score+1;
         document.getElementById("player1_score").innerHTML=player1_score;
     }
     else
     {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
     }
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else
    {
        (question_turn ="player1")
    
        question_turn="player2"
        document.getElementById("player_answer").innerHTML="Question Turn - "+player1_name;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else
    {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}


