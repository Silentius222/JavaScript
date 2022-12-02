var tablica = [1, 2, 3, 4, 5];

function kwadraty(arr) {
  var suma = 0;
  for(var i = 0 ; i < arr.length ; i++){
    suma += Math.pow(arr[i],2);
  }
  return suma;
}
var wynik = kwadraty(tablica);
console.log(wynik);

