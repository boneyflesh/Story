window.onload = function() {
    document.getElementById("scene1").style.display = "block";
};

document.querySelectorAll(".nextBtn").forEach(button => {
    button.addEventListener("click", function() {
        const targetId = this.getAttribute("data-target");
        console.log(targetId);
        if (targetId) {
            document.getElementById(targetId).style.display = "block";
        }
        this.style.display = "none"
    })
});

document.getElementById("revealBtn").addEventListener("click", function() {
    document.getElementById("photoReveal").style.display = "block";
    this.style.display = "none"; //hide button after click
});