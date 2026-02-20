const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerText = "Godmorgen og velkommen til 👋";
}   
    else if (hour < 18) {
        greeting.innerText = "Godeftermiddag og velkommen til 👋";
}

    else {
        greeting.innerText = "Godaften og velkommen til 👋";
    }