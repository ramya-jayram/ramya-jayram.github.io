
var imageaddress = "https://ramya-jayram.github.io/image";

function modefunction(){
    var modechange = document.getElementById('modechange');
    console.log(modechange.src);

    if(modechange.src == `${imageaddress}/moon.svg`)
    {
        document.body.style.backgroundColor = "#000000";
        modechange.src = `${imageaddress}/sun.svg`;

        var navbar = document.getElementById("topbar");
        navbar.style.background ="#000000"

        // var logoicon = document.getElementById("logoIcon");
        // logoicon.style.fill="#ffffff"

        document.getElementById("logoIcon").style.fill="white";

        document.body.style.color="#ffffff";
    } 
    // 
    else
    {
        document.body.style.backgroundColor = "#ffffff";
        modechange.src = `${imageaddress}/moon.svg`;

        var navbar = document.getElementById("topbar");
        navbar.style.background ="#ffffff"

        // var logoicon = document.getElementById("logoIcon");
        // logoicon.style.fill="#000000"

        document.getElementById("logoIcon").style.fill="#000000";

        document.body.style.color="#000000";

        

    }

    

}