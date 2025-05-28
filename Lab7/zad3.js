function togglePasswordVisibility() {
    let hasloInput = document.getElementById("haslo");
    let checkbox = document.getElementById("togglePassword");

    if (checkbox.checked) {
        hasloInput.type = "text"; // Pokazuje hasło
    } else {
        hasloInput.type = "password"; // Ukrywa hasło
    }
}
