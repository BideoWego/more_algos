function concat(target) {
    var concatenated = target.slice();
    var cc = array => {
        if (array === undefined) {
            return concatenated;
        }
        var copy = array.slice();
        concatenated = concatenated.concat(copy);
        return cc;
    };
    return cc;
}

var a = [1];
var b = [2];
var c = [3];
var d = [4];
var e = [5];
var f = [6];
console.log(concat(a)(b)(c)(d)(e)(f)());
//=> [1, 2, 3, 4, 5, 6]
console.log(a);
//=> [1]
console.log(b);
//=> [2]
console.log(c);
//=> [3]
console.log(d);
//=> [4]
console.log(e);
//=> [5]
console.log(f);
//=> [6]
