Function.prototype.curry = function(numArgs) {
    const args = [];
    const fn = this;

    return function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
        return fn(...args);
        } else {
        return _curriedFn;
        }
    }
}
