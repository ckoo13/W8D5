function sum() {
    let sum = 0;
    //turns arguments into an array (args)
    const args = Array.prototype.slice.call(arguments);

    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

// console.log(sum(1,2,3,4));

function sum2(...theArgs) {
    let sum = 0;

    for(let i = 0; i < theArgs.length; i++) {
        sum += theArgs[i];
    }

    return sum;
}

