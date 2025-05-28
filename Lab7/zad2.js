function updateWelcomeMessage() {
            let imie = document.getElementById("imie").value;
            let welcomeMessage = document.getElementById("welcome-message");

            if (imie) {
                welcomeMessage.textContent = "Witaj, " + imie + "!";
            } else {
                welcomeMessage.textContent = "Witaj na stronie!";
            }
}
