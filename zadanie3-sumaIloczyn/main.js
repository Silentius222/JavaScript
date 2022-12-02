let tablica = [1, 2, 3, 4, 5, 6];

function liczenie(arr) {
  var suma = 0;
  var iloczyn = 1;
  for (var i = 0; i < arr.length; i++) {
  suma += arr[i];
  iloczyn *= arr[i]
}
console.log("Suma = " + suma);
console.log("Iloczyn = " + iloczyn);
}

liczenie(tablica);