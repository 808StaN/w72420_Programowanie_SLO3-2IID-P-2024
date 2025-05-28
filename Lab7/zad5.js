function togglePhoneField() {
    let phoneInput = document.getElementById("telefon");
    let checkbox = document.getElementById("togglePhone");

    if (checkbox.checked) {
        phoneInput.classList.add("hidden");
    } else {
        phoneInput.classList.remove("hidden");
    }
}
