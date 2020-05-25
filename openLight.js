//Made by JP

//Dark and light mode strings for easy readability
dark = "dark";
light = "light";

version = "1.0"; //Current running version

mode = dark; //default mode is light mode (it is toggles when the window loads)


//Foreground and background mode ids
modeBackgroundId = "lightDarkB";
modeForegroundId = "lightDarkF" ;


//Corresponding colors for forground and background of light mode and dark mode (these are just default colors)
openLightColors = {
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

//Initializes everything onload
window.onload = function(){
    this.toggleMode();
    this.console.log("This site uses OpenLight version "+version+" for dark mode toggling!");
};