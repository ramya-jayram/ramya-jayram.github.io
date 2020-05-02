
var imageaddress = "https://ramyajayaram.com/image";


function modefunction(){
    var modechange = document.getElementById('modechange');
    console.log(modechange.src);

    //  Dark mode

    if(modechange.src == `${imageaddress}/moon.svg`)
    {
        document.body.style.backgroundColor = "#000000";
        modechange.src = `${imageaddress}/sun.svg`;

        var navbar = document.getElementById("topbar");
        navbar.style.background ="rgba(0, 0, 0, 0.5)0"

        document.getElementById("logoIcon").style.fill="white";

        document.body.style.color="#ffffff";

        document.getElementById("caretdown").style.fill="white";

        document.getElementById("about").style.background="#191919";

        var card = document.querySelectorAll(".card");
        for (var i=0; i<card.length; i++) 
        {
            card[i].style.background = "#191919";
            card[i].className = card[i].className + " newclass";
        }
        
    } 
    //  Day Mode

    else
    {
        document.body.style.backgroundColor = "#ffffff";
        modechange.src = `${imageaddress}/moon.svg`;

        var navbar = document.getElementById("topbar");
        navbar.style.background ="rgba(255, 255, 255, 0.5)0"

        document.getElementById("logoIcon").style.fill="#000000";

        document.body.style.color="#000000";

        document.getElementById("caretdown").style.fill="#000000";

        document.getElementById("about").style.background="#f9f9fa";    

        var card = document.querySelectorAll(".card");
        for (var i=0; i<card.length; i++) 
        {
            card[i].style.background = "#fcfcfc";
            card[i].className = card[i].className + " newclass";
        }

    }

}