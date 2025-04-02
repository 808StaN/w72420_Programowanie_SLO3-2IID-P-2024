const liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
const liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

if (!isNaN(liczba1) && !isNaN(liczba2)) {
    const suma = liczba1 + liczba2;
    alert("Wynik dodawania to: " + suma);
} else {
    alert("Proszę wprowadzić prawidłowe liczby całkowite.");
}
