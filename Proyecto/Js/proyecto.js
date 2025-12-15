// ===== ANIMACIÓN SUAVE AL CARGAR =====
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".flex-container div");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});

// ===== BOTÓN MODO OSCURO (OPCIONAL) =====
const darkBtn = document.createElement("button");
darkBtn.textContent = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.padding = "12px 14px";
darkBtn.style.cursor = "pointer";
darkBtn.style.background = "#c9a44c";
darkBtn.style.fontSize = "18px";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ===== ESTILOS DEL MODO OSCURO =====
const styleDark = document.createElement("style");
styleDark.innerHTML = `
body.dark {
    background-color: #121212;
    color: #f5e6b8;
}
body.dark .flex-container div {
    background-color: #1e1e1e;
}
body.dark h2 {
    color: #ffd700;
}
`;
document.head.appendChild(styleDark);
