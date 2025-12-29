// DNA de Constelação - Tradução de Imagem para Código
const canvas = document.getElementById("portalCanvas");
const ctx = canvas.getContext("2d");
let w, h, particles = [];
const dnaChars = "X4DNA77701".split("");

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for(let i = 0; i < 1200; i++) { // Densidade de Constelação
        particles.push({
            r: Math.random() * Math.max(w, h),
            angle: Math.random() * Math.PI * 2,
            speed: 0.002 + Math.random() * 0.003, // Velocidade 20% conforme comando
            size: Math.random() * 12 + 8,
            char: dnaChars[Math.floor(Math.random() * dnaChars.length)]
        });
    }
}

function draw() {
    // Acúmulo de Massa (Glow Neon)
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
    ctx.fillRect(0, 0, w, h);

    particles.forEach(p => {
        p.angle += p.speed;
        p.r -= 2.5; // Sucção gravitacional agressiva

        if(p.r < 30) p.r = Math.max(w, h) * 0.9;

        const x = w/2 + Math.cos(p.angle) * p.r;
        const y = h/2 + Math.sin(p.angle) * p.r;

        ctx.fillStyle = "#ff0000";
        ctx.font = p.size + "px monospace";
        ctx.shadowBlur = 15; // O efeito Neon da imagem
        ctx.shadowColor = "#ff0000";
        ctx.fillText(p.char, x, y);
    });

    // O Vácuo Central (Buraco Negro)
    ctx.beginPath();
    ctx.arc(w/2, h/2, 50, 0, Math.PI * 2);
    ctx.fillStyle = "#000";
    ctx.shadowBlur = 80;
    ctx.shadowColor = "#ff0000";
    ctx.fill();

    requestAnimationFrame(draw);
}

window.addEventListener("resize", init);
init(); draw();
