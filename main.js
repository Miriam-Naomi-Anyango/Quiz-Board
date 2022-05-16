// display the first block of question
document.getElementsByClassName('containera')[0].style.display = "block";
// defining the next function
function next(id) {
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-1].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-2].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-3].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-4].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-5].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-6].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-7].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-8].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-9].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-10].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-11].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
}
// obtaining the final results
function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    }
    if (document.getElementById('correct7').checked) {
        score++;
    }
    if (document.getElementById('correct8').checked) {
        score++;
    }
    if (document.getElementById('correct9').checked) {
        score++;
    }
    if (document.getElementById('correct10').checked) {
        score++;
        alert("You have scored: "+ score);
    }
}