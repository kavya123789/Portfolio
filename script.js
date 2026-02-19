// Dark Mode
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme",
        document.body.classList.contains("light-mode") ? "light" : "dark"
    );
});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}

// Typing Animation
const text = "AI Developer | Web Developer | Problem Solver";
let index = 0;

function typeEffect() {
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

// Project Filter
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
        if(category === "all"){
            project.style.display = "block";
        } else {
            project.style.display =
                project.classList.contains(category) ? "block" : "none";
        }
    });
}
