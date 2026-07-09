window.onload = function() {
    document.getElementById("scene1").style.display = "block";
};

function showScene(targetId) {
    const targetScene = document.getElementById(targetId);
    targetScene.style.display = "block";
}

document.querySelectorAll(".nextBtn").forEach(button => {
  button.addEventListener("click", function() {
    const targetId = this.getAttribute("data-target");
    if (targetId) {
        showScene(targetId);
    }
    this.style.display = "none";
  });
});

document.querySelectorAll(".caption").forEach(caption => {
    caption.style.opacity = 0;
    setTimeout(() => {
        caption.style.transition = "opacity 2s";
        caption.style.opacity = 1;
    }, 1000); // delay 1 second
});


document.getElementById("revealBtn").addEventListener("click", function() {
    document.getElementById("photoReveal").style.display = "block";
    this.style.display = "none";

    document.getElementById("photoReveal").scrollIntoView({ behavior: "smooth", block: "start"});
    
    // Confetti burst
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
});
