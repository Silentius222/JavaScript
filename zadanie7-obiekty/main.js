class Ksiazka {
    constructor(tytul, autor, przeczytana){
      this.tytul = tytul;
      this.autor = autor;
      this.przeczytana = przeczytana;
    }
    
    opiszKsiazke(){
      if (this.przeczytana === true){
      console.log(`Książka ma tytuł `
  + this.tytul +  ` autorem jest  ` + this.autor + ` i została przeczytana.` );
    }else{
      console.log(`Książka ma tytuł `
  + this.tytul + ` autorem jest  ` + this.autor + ` i nie została przeczytana.` );
    }
  }
  }
  
  let wiedzmin = new Ksiazka("Wiedzmin", "Andrzej Sapkowski", true);
  
  let Czarnypryzmat = new Ksiazka("Czarny pryzmat","Brent Weeks", true);
  
  let Pustynnawlocznia = new Ksiazka("Pustynna włócznia","Peter V. Brett", false);
  
  let tablica = [wiedzmin, Czarnypryzmat, Pustynnawlocznia];
  
  function iloscPrzeczytanych(arr) {
    var suma = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].przeczytana){
        suma++
      }
    }
    return suma;
  }
  
  console.log(wiedzmin);
  wiedzmin.opiszKsiazke();
  
  console.log(Czarnypryzmat);
  Czarnypryzmat.opiszKsiazke();
  
  console.log(Pustynnawlocznia);
  Pustynnawlocznia.opiszKsiazke();
  
  var ilosc = iloscPrzeczytanych(tablica);
  console.log(ilosc);