const toggleButton = document.getElementById("darkModeToggle");

// Ajouter un écouteur d'événement au clic
toggleButton.addEventListener("click", function () {
  // Alterner entre le mode sombre et clair
  document.body.classList.toggle("dark-mode");

  // Changer le texte du bouton
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Mode Clair";
  } else {
    toggleButton.textContent = "Mode Sombre";
  }
});

