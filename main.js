var fizz = 0, buzz = 0, fb = 0;

for(var i = 1; i <= 100; i++){
  if(!(i%3) && !(i%5)){
    fb++;
    console.log('FizzBuzz', i);
  }else if(!(i%3)){
    fizz++;
    console.log('Fizz', i);
  }else if(!(i%5)){
    buzz++;
    console.log('Buzz', i);
  }
}

console.log('****************************');
console.log('Fizz', fizz, 'Buzz', buzz, 'FizzBuzz', fb);
