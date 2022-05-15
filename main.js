// display the first block of question
document.getElementsByClassName('containera')[0].style.display = "block";
// defining the next function
function next(id) {
    document.getElementsByClassName('containera')[id-1].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
    document.getElementsByClassName('containera')[id-2].style.display = "none";
    document.getElementsByClassName('containera')[id].style.display = "block";
}