function afficherMessage(){
    alert("bouton cliqué !");
}
function afficherMessages(){
    alert("Voulez vous envoyer votre formulaire");
}
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Afficher ou cacher le bouton en fonction du scroll
window.onscroll = function() {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Fonction pour remonter en haut avec un effet fluide
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
