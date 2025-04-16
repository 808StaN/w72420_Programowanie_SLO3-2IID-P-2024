const student = {
    imie: "Dawid",
    nazwisko: "Stanisz",
    numerAlbumu: 72420,
    oceny: {
      matematyka: 4.5,
      informatyka: 5.0,
      fizyka: 3.5
    }
  };
  
  function obliczSrednia(student) {
    const oceny = Object.values(student.oceny);
    const sumaOcen = oceny.reduce((suma, ocena) => suma + ocena, 0);
    return sumaOcen / oceny.length;
  }
  
  console.log(`Średnia ocen studenta: ${obliczSrednia(student).toFixed(2)}`);
  