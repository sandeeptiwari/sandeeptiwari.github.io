---
title: JS Function In Depth
date: '2021-02-19T23:00:00.00Z'
description: 'Will explore java script function'
---
We have function funky, which accepts one parameter.
```
function funky(o) {
o = null;
}
var x = [];
funky(x);
console.log(x); // ?
```
Since we are passing variable into function, if any operation performed by that variable, it wouldn't apply on an original variable. So Here output would be [] . Now see below function

```
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
}

var x = 1, y = 2;
swap(x, y);
console.log('X :  ' + x);
```

#Currying :
Currying is a technique to writing the function in advance manner like f(a, b) we can call it f(a)(b).
We have to write a currying function Like: Sum(3)(4)(5)=12

```
function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

console.log('Sum of sum(3)(4)(5) = ', sum(3)(4)(5)());// 12
```
