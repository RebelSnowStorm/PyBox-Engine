document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();

    const baseWord = "PYBOX";
    const crazyFonts = [
        'Inter',
        'Bebas Neue',
        'Creepster',
        'Pacifico',
        'Playfair Display',
        'VT323',
        'Rye'
    ];

    const logoContainer = document.getElementById('dynamic-logo');

    function randomizeLogo() {
        if (!logoContainer) return;
        
        logoContainer.innerHTML = ''; 

        for (let i = 0; i < baseWord.length; i++) {
            let char = baseWord[i];
            
            if (Math.random() > 0.5) {
                char = char.toLowerCase();
            }

            const font = crazyFonts[Math.floor(Math.random() * crazyFonts.length)];
            const color = 'var(--black)';
            const rotation = (Math.random() - 0.5) * 25;
            const scale = 0.85 + Math.random() * 0.35;
            
            const maxNudge = window.innerWidth > 768 ? 30 : 10;
            const nudgeY = (Math.random() - 0.5) * maxNudge;

            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'chaotic-letter';
            
            span.style.fontFamily = `"${font}", sans-serif`;
            span.style.color = color;
            span.style.transform = `rotate(${rotation}deg) scale(${scale}) translateY(${nudgeY}px)`;

            logoContainer.appendChild(span);
        }
    }

    if (logoContainer) {
        logoContainer.addEventListener('click', randomizeLogo);
    }

    randomizeLogo();
});