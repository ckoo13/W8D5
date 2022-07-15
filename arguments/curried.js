function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);

        let sum = 0;
        if (numbers.length === numArgs) { 

            for (const i of numbers) {
                sum += i;
            }

            return sum;
        }
        
        else {
            return _curriedSum;
        }
    }


    
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(20)); // => 56