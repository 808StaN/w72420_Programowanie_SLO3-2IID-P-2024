function sprawdzPelnoletnosc() {
    let wiek = prompt("Podaj swój wiek:");
    
    wiek = parseInt(wiek);

    if (!isNaN(wiek)) {
        if (wiek >= 18) {
            console.log("Jesteś pełnoletni.");
        } else {
            console.log("Nie jesteś pełnoletni.");
        }
    } else {
        console.log("Podana wartość nie jest prawidłową liczbą.");
    }
}

sprawdzPelnoletnosc();
