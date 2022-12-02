function odwroc(napis) {
    var pobierzNapis;
    var odwrocNapis;
    var zlaczNapis;

    pobierzNapis = napis.split(" ");
    odwrocNapis = pobierzNapis.reverse();
    zlaczNapis = odwrocNapis.join(" ");

    return zlaczNapis;
}

console.log(odwroc("Akademia 108"));