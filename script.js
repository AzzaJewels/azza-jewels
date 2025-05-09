// Animate text on load
window.addEventListener("load", () => {
  gsap.from(".hero-content h2", { y: -50, opacity: 0, duration: 1 });
  gsap.from(".hero-content p", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
});

// Optional: Particles background using canvas
const canvas = document.querySelector(".particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

for (let i = 0; i < 100; i++) {
  particlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    let p = particlesArray[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 215, 0, 0.7)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x > canvas.width || p.x < 0) p.dx *= -1;
    if (p.y > canvas.height || p.y < 0) p.dy *= -1;
  }
  requestAnimationFrame(animateParticles);
}

animateParticles();
