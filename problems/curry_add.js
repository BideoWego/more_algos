function add(num) {
    const fn = n => {
        if (n !== undefined) {
            num += n;
            return fn;
        } else {
            return num;
        }
    };
    return fn;
}

console.log(add(1)(2)());
//=> 3
console.log(add(1)(2)(3)());
//=> 6
console.log(add(1)(2)(3)(4)());
//=> 10
console.log(add(1)(2)(3)(4)(5)());
//=> 15
console.log(add(1)(2)(3)(4)(5)(6)());
//=> 21
