function modefunction(){
    var modechange = document.getElementById('modechange');
    // console.log(homepic.src);

    if(modechange.src == 'file:///Users/ramya/Documents/Portfolio/image/moon.svg')
    // 
    {
        document.body.style.backgroundColor = "#000000";
        modechange.src = 'file:///Users/ramya/Documents/Portfolio/image/sun.svg';

        var navbar = document.getElementById("topbar");
        navbar.style.background ="#000000"

        // var logoicon = document.getElementById("logoIcon");
        // logoicon.style.fill="#ffffff"

        document.getElementById("logoIcon").style.fill="white";

        document.body.style.color="#ffffff";
        
        var homepic = document.getElementById('homepic');
        homepic.src = 'file:///Users/ramya/Documents/Portfolio/image/ramyadark.png';
    } 
    // 
    else
    {
        document.body.style.backgroundColor = "#ffffff";
        modechange.src = 'file:///Users/ramya/Documents/Portfolio/image/moon.svg';

        var navbar = document.getElementById("topbar");
        navbar.style.background ="#ffffff"

        // var logoicon = document.getElementById("logoIcon");
        // logoicon.style.fill="#000000"

        document.getElementById("logoIcon").style.fill="#000000";

        document.body.style.color="#000000";

        var homepic = document.getElementById("homepic");
        homepic.src = 'file:///Users/ramya/Documents/Portfolio/image/ramyadark.png';

        

    }

    

}