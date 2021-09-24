function isPrime(number){
    if(number<2)return false;
    for(let test=2;test<number;test++)
        if(number%test===0)
            return false;

    return true;
}

function find(values, matching){
    let results=[];
    for(let value of values ){
        if(matching(value))
            results.push(value);
    }
    return results;
}



// applications code

let array=[ 2,9,11,15,8,45,31,23,10 ]

let primes = find(array, isPrime);
console.log('primes',primes);

//how to find all even numbers



let evens = find(array, function (value) { return value%2===0; });

console.log('evens',evens);