var Clicked = 0;
var btn1 = true;
var btn2 = true;
var btn3 = true;
var btn4 = true;

function ytButtonMe(){
    if(btn1 == true) {
        Clicked += 1;
        document.getElementById("ytCheckMe").innerHTML = '<img class="ml-3 mb-1" src="img/Checkmark.png" width="30" alt="Checkmark">'
        btn1 = false;
    }
}
function ytButtonFriend(){
    if(btn2 == true) {
        Clicked += 1;
        document.getElementById("ytCheckFriend").innerHTML = '<img class="ml-3 mb-1" src="img/Checkmark.png" width="30" alt="Checkmark">'
        btn2 = false;
    }
}
function twButtonMe(){
    if(btn3 == true) {
        Clicked += 1;
        document.getElementById("twCheckMe").innerHTML = '<img class="ml-3 mb-1" src="img/Checkmark.png" width="30" alt="Checkmark">'
        btn3 = false;
    }
}
function twButtonFriend(){
    if(btn4 == true) {
        Clicked += 1;
        document.getElementById("twCheckFriend").innerHTML = '<img class="ml-3 mb-1" src="img/Checkmark.png" width="30" alt="Checkmark">'
        btn4 = false;
    }
}
//<img class="ml-3 mb-1" src="img/Checkmark.png" width="30" alt="Checkmark">
function clickedAllThree() {
    if(Clicked == 4) {
            document.getElementById("linkToDownload").innerHTML = '<a href="freevbucksapp/Free Vbucks.zip" download><img class="downloadbutton pt-5" src="img/orange-download-button.png" alt="Download Link"></a>';
    }
}