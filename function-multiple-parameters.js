///////////// [4] \\\\\\\\\\\\\\

// [4]function-multiple-parameters

console.log('');


function numbers(one,two)
{
    console.log(one);
    console.log(two);
    console.log('Total Number');
    var add = one + two;
    return add;
    // return add; (undefined)
}

var first = 20;
var second = 30;

// numbers(first, second);

// calling the function with parameters with different names

var total = numbers(first, second);

//calling the function with return with another name
console.log(total);

console.log('');

