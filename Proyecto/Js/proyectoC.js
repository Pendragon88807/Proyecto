// Archivo JavaScript para futuras funcionalidades interactivas

// Animación de entrada para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.god-card');
    
    // Observador de intersección para animar las tarjetas cuando entran en vista
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Efecto de click en las tarjetas
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});

// Efecto de parallax suave en las columnas
window.addEventListener('scroll', function() {
    const columns = document.querySelector('.columns');
    if (columns) {
        const scrolled = window.pageYOffset;
        columns.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});