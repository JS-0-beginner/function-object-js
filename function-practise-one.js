///////////// [P] \\\\\\\\\\\\\\

// [One]function-practise-one.js 

console.log('');
console.log('Average of three numbers :');

function numbers(one, two, three)
{
    console.log(one);
    console.log(two);
    console.log(three);
    console.log('Total');
    var add = one + two + three;
    console.log(add);
    console.log('Average');
    var average = add / 3;
    return average;
}

var avg = numbers(45, 65, 89);
console.log(avg.toFixed(2));

console.log('');
