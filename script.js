const CLICKSOUND = new Audio("./static/swish.m4a");

document.querySelector('#click-name').addEventListener("click", clickName);
document.querySelector('#click-nickname').addEventListener("click", clickNickname);
document.querySelector('#click-computer-subject').addEventListener("click", clickComputerSubject);
document.querySelector('#click-ge-subject').addEventListener("click", clickGeSubject);
document.querySelector('#click-prog').addEventListener("click", clickProg);
document.querySelector('#click-food').addEventListener("click", clickFood);
document.querySelector('#click-hobby').addEventListener("click", clickHobby);
document.querySelector('#click-childhood-dream').addEventListener("click", clickChildhoodDream);

function clickName() {
    CLICKSOUND.play();
    window.alert("Hi, my name is George Gragas.");
}

function clickNickname() {
    CLICKSOUND.play();
    window.alert("You can call me George, but my family call me Jay-r.");
}

function clickComputerSubject() {
    CLICKSOUND.play();
    window.alert("So far, I love CMCS 12 because it is memorable to me. I made my first game and that is Geography Quiz Game. Eventough it is a console application, it pave my way to pursue my game development carreer. (You can check my Geography Quiz Game in my github)");
}

function clickGeSubject() {
    CLICKSOUND.play();
    window.alert("I really love MATH10. It is because it gives me a picture that math is not scary at all. I enjoy doing my project and that is 3D modelling. (You can check my 3D illustrations in my github)");
}

function clickProg() {
    CLICKSOUND.play();
    window.alert("I really love C# because right now I'm using to create and build games. Im looking forward to learn C++ to enhance my game development skills.");
}

function clickFood() {
    CLICKSOUND.play();
    window.alert("I love siopao and siomai. <3");
}

function clickHobby() {
    CLICKSOUND.play();
    window.alert("My hobbies are playing computer games. My favorites are Need for Speed most wanted and GTA. Occassionally, I spend my free time in building and creating game prototype. I also love sleeping and eating.");
}

function clickChildhoodDream() {
    CLICKSOUND.play();
    window.alert("When I was a child, I dream of becoming a scientist. Then eventually, as I grew up, my dreams and visions dramatically shift to engineer, to architect, to graphic designer etc. This is due of practicality, financial hardships, etc. And now, I want to be a game developer. I wish to work in game company or game studio probably in Unity, Epic Games, Ubisoft, Rockstar Games etc.");
}