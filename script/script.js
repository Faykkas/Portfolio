document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelectorAll(".intro-text h2");

    function animateText() {
        introText.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("active");
            }, index * 600); // Délai entre chaque ligne
        });

        // Supprime la classe après l'animation pour pouvoir la répéter
        setTimeout(() => {
            introText.forEach(element => element.classList.remove("active"));
        }, 2000); // Supprime après 2 secondes (ajustez selon le timing)
    }

    // Lancer l'animation initiale
    animateText();

    // Répéter l'animation toutes les 2,6 secondes
    setInterval(animateText, 2600);
});



document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour remplir une barre de progression
    function fillProgressBar(barId, percentage) {
        const bar = document.getElementById(barId);
        if (bar) {
            bar.style.width = percentage + '%';
        }
    }

    // Remplissage des barres au chargement
    fillProgressBar('htmlBar', 90);  // Barre HTML
    fillProgressBar('cssBar', 75);   // Barre CSS
    fillProgressBar('jsBar', 45);    // Barre JavaScript
});


