let tablica =  [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sortowanie(arr) {
  var zmiana; 
  var zrobione;
  do {
  zmiana = false;
  for(var i = 0; i < arr.length - 1; i++) {
  if (arr[i+1] < arr[i]) {
  zrobione = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = zrobione;
  zmiana = true;
  }
}
} while (zmiana);
return arr;
}

console.log(sortowanie(tablica));