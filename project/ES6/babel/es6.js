console.log([1,2,3].map(x=>x*x));
var a = [];
for (let i = 0;i < 10;i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

let b;

var [ x = 1 ] = [ null ]
 
console.log("\u{20BB7}");
// Symbol 新增数据类型 具有唯一性 为了解决属性名重复的问题
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym);

const c = 'song';
const str = `foo${c}bar`;

const obj1 = {
    id: 5,
    name: 'peng',
    [getKey('enabled')]: true,
};
// Set&Map数据结构
var s = new Set();
[2,3,5,4,5,2,2].map(x => s.add(x))
for (i of s) {console.log(i)}
// Map
let map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);
for (let item of map.entries()) {
    console.log(item);
}