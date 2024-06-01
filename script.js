document.addEventListener('DOMContentLoaded', (event) => {
    // Background stars and planets
    const background = document.getElementById('background');
    const starCount = 100;
    const planetCount = 10;

    function createCelestialBodies(type, count) {
        for (let i = 0; i < count; i++) {
            let celestialBody = document.createElement('div');
            celestialBody.className = type;
            celestialBody.style.left = `${Math.random() * 100}vw`;
            celestialBody.style.top = `${Math.random() * 100}vh`;
            background.appendChild(celestialBody);
        }
    }

    createCelestialBodies('star', starCount);
    createCelestialBodies('planet', planetCount);

    // Mouse interaction
    document.addEventListener('mousemove', (event) => {
        const bodies = document.querySelectorAll('.star, .planet');
        bodies.forEach(body => {
            const rect = body.getBoundingClientRect();
            const bodyCenterX = rect.left + rect.width / 2;
            const bodyCenterY = rect.top + rect.height / 2;
            const distanceX = event.clientX - bodyCenterX;
            const distanceY = event.clientY - bodyCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const maxDistance = 100;
            if (distance < maxDistance) {
                const angle = Math.atan2(distanceY, distanceX);
                const moveDistance = (maxDistance - distance) / 2;
                body.style.transform = `translate(${Math.cos(angle) * moveDistance}px, ${Math.sin(angle) * moveDistance}px)`;
            } else {
                body.style.transform = 'translate(0, 0)';
            }
        });
    });
});
