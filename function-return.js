/////////////// [3] \\\\\\\\\\\\\\

// [3]function return

console.log('');

function bringBeers()
{
    console.log('I have', money, '$');
    console.log('Give me Beers');
    console.log('');
    var beers = 10;
    var beersQuantity = money/beers;
    return beersQuantity;

}

var money = 250;
var beersQuantity = bringBeers(money);
console.log('Alright here is your', beersQuantity, 'Beers');

console.log('');