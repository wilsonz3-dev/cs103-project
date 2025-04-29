
// Linnea added home javascript
function revealFunction() {
    window.sr = ScrollReveal({duration: 1350, distance: '200px', easing: 'ease-out'});
    sr.reveal('.town-card', {origin: 'left', reset: true});
}

window.addEventListener('load', (e) => {
    revealFunction();
})
