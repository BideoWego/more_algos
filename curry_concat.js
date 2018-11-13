function concat(target) {
    var copy = target.slice();
    function cc(array) {
        if (array === undefined) {
            return this.target;
        }
        var copy = array.slice();
        copy = this.target.concat(copy);
        return cc.bind({ target: copy });
    }
    return cc.bind({ target: copy });
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

const concat1 = concat([1]);
console.log(concat1([2])());
//=> [1, 2]
console.log(concat1([3])());
//=> [1, 3]
// NOT
//=> [1, 2, 3]
