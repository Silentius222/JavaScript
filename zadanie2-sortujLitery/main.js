function sortowanie(napis) {
    var litery;
  
    var pobierzNapis;
  
    var laczenie;
  
    pobierzNapis = napis.split("");
    litery = pobierzNapis.sort();
    
    laczenie = litery.join(" ")
      
    
    return laczenie;
  }
  
  console.log(sortowanie("Akademia 108"));