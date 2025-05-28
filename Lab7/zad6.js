function dodajKraje() {
    let krajSelect = document.getElementById("kraj");

    let kraje = ["Niemcy", "Francja", "Włochy", "Hiszpania", "USA", "Japonia"];

    kraje.forEach(kraj => {
        let opcja = document.createElement("option");
        opcja.value = kraj;
        opcja.textContent = kraj;
        krajSelect.appendChild(opcja);
    });
}


window.onload = dodajKraje;