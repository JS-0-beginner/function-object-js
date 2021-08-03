///////////// [2] \\\\\\\\\\\\\\

// [2] function parameters and calling function with parameters

// 2(i)function parameters

console.log('');
console.log('In previous function');

function bringPizza(money)
{
    console.log('I have', money);
    console.log('Please give me a whole pizza.');
    
}

bringPizza("20$");

// 2(ii)function calling with parameters

console.log('');
console.log('Now')

function bringPizza(money)
{
    console.log('I have', money);
    console.log('Please give me a burger.');
    
}

var price = '5$';
bringPizza(price);
// So, In last function call, function will work with the last given parameter. 

console.log('');