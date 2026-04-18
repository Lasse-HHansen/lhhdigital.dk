const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (greeting)
{
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
}




const modal = document.getElementById("projectModal");
const closeBtn = document.getElementById(".close-btn");

function openModal(title, description) {
    document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    
    if (modal && modalTitle && modalDescription)
    {
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    if (modal)
    {
        modal.style.display = "none";
    }
    
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}