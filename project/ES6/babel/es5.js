'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log([1, 2, 3].map(function (x) {
    return x * x;
}));
var a = [];

var _loop = function _loop(_i) {
    a[_i] = function () {
        console.log(_i);
    };
};

for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
}
a[6]();

var b = void 0;

var _ref = null,
    x = _ref === undefined ? 1 : _ref;


console.log('\uD842\uDFB7');
// Symbol 新增数据类型 具有唯一性 为了解决属性名重复的问题
var obj = {
    toString: function toString() {
        return 'abc';
    }
};
var sym = Symbol(obj);
console.log(sym);

var c = 'song';
var str = 'foo' + c + 'bar';

var obj1 = _defineProperty({
    id: 5,
    name: 'peng'
}, getKey('enabled'), true);
// Set&Map数据结构
var s = new Set();
[2, 3, 5, 4, 5, 2, 2].map(function (x) {
    return s.add(x);
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;
        console.log(i);
    }
    // Map
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var map = new Map([['F', 'no'], ['T', 'yes']]);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        console.log(item);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}
