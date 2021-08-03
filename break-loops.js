//////////// break-loops \\\\\\\\\\\\

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

i=0;
while(i<10)
{
    console.log(i, 'Kick his ass.');
    if(i == 5)
    {
        console.log('Ok, thats enough stop kicking him');
        break;
    }
    i++;
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

for (i=0; i<=10; i++)
{
    console.log(i,'Eat Hospos');
    if(i>=5)
    {
        console.log('Stop eating Hospos');
        break;
        
    }

}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

var numbers = [23, 85, 45, 87, 45, 89, 90, 87, 77, 51]

for(i=0; i<numbers.length; i++)
{
    var list = numbers[i];
    console.log(list);
    if(list>95)
    {
        break;
    }
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

var numbers = [23, 85, 45, 87, 45, 89, 90, 110, 520, 87, 77, 51]

for(i=0; i<numbers.length; i++)
{
    var list = numbers[i];
    if(list>500)
    {
        continue;
    }
    console.log(list);
    
}