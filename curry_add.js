function add(num) {
    const fn = n => {
        if (n !== undefined) {
            num += n;
            return fn;
        } else {
            return num;
        }
    };
    Object.defineProperties(fn, {
        value: {
            get: function() { return num; }
        }
    });
    return fn;
}

console.log(add(1)(2)(3)(4).value);
