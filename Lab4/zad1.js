const ksiazka = {
    tytul: "Władca Pierścieni",
    autor: "J.R.R. Tolkien",
    rokWydania: 1954
  };
  
  function informacjeOksiazce(ksiazka) {
    return `${ksiazka.tytul} - ${ksiazka.autor} (${ksiazka.rokWydania})`;
  }
  
  console.log(informacjeOksiazce(ksiazka));
 