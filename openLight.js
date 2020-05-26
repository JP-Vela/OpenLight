//Made by JP

//Dark and light mode strings for easy readability
const dark = "dark";
const  light = "light";

const version = "1.0"; //Current running version

var mode = dark; //default mode is light mode (it is toggles when the window loads)
var openlightcookie; //cookie to store prefered mode

//Foreground and background mode ids
const modeBackgroundId = "lightDarkB";
const modeForegroundId = "lightDarkF" ;


//Corresponding colors for forground and background of light mode and dark mode (these are just default colors)
var openLightColors = {
darkBackgroundStyle: "rgb(30,30,38)",
lightBackgroundStyle: "rgb(255,255,255)",
darkForegroundStyle: "rgb(240,240,250)",
lightForegroundStyle: "rgb(30,30,40)"
}


//Toggle between light mode and dark mode USE THIS FUNCTION FOR ONCLICK
function toggleMode(){

    toggleButton = document.getElementById("toggler");
    if(mode == dark){
        mode = light;
        lightMode();
    } else {
        mode = dark;
        darkMode();
    }

    setCookie("openlightcookie", mode, 30);
}

//Make the page light mode
function lightMode(){
    var backgroundElem = document.getElementsByClassName(modeBackgroundId);
    var foregroundElem = document.getElementsByClassName(modeForegroundId);

    //Loops through all the elments with the background class name
    for(i = 0;i<backgroundElem.length;i++){

        //Checks set default
        if(backgroundElem[i].classList.contains(light)){
            backgroundElem[i].style.backgroundColor=openLightColors.lightBackgroundStyle;
        } else {
            backgroundElem[i].style.backgroundColor=openLightColors.darkBackgroundStyle;
        }
    }

    //Loops through all the elments with the foreground class name
    for(i = 0;i<foregroundElem.length;i++){

        //Checks set default
        if(foregroundElem[i].classList.contains(light)){
            foregroundElem[i].style.color=openLightColors.lightForegroundStyle;
        } else {
            foregroundElem[i].style.color=openLightColors.darkForegroundStyle;
        }
    }
    //toggleButton.className="fas fa-moon";
}

//Make the page dark mode
function darkMode(){
    var backgroundElem = document.getElementsByClassName(modeBackgroundId);
    var foregroundElem = document.getElementsByClassName(modeForegroundId);

    //Loops through all the elments with the background class name
    for(i = 0;i<backgroundElem.length;i++){

        //Checks set default
        if(backgroundElem[i].classList.contains(light)){
            backgroundElem[i].style.backgroundColor=openLightColors.darkBackgroundStyle;
        } else {
            backgroundElem[i].style.backgroundColor=openLightColors.lightBackgroundStyle;
        }
    }

    //Loops through all the elments with the foreground class name
    for(i = 0;i<foregroundElem.length;i++){

        //Checks set default
        if(foregroundElem[i].classList.contains(light)){
            foregroundElem[i].style.color=openLightColors.darkForegroundStyle;
        } else {
            foregroundElem[i].style.color=openLightColors.lightForegroundStyle;
        }
    }
}


//Used to set openlightcookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Used to get openlightcookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
//Initializes everything onload
window.onload = function(){

    //Set cookie variable
    openlightcookie = getCookie("openlightcookie");

    //If the cookie is no empty
    if(openlightcookie!="") {
        mode = openlightcookie; //Set the mode to the user's prefered mode
    }

    this.toggleMode();
    this.console.log("This site uses OpenLight version "+version+" for dark mode toggling!");
};