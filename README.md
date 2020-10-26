#####  Longest Substring Without Repeating Characters

```javascript
var lengthOfLongestSubstring = function(s) {
    //hash to keep all the element of string with index
    let hash = {}
    let curr_max = 0
    for (let i = 0; i < s.length; i++) {
       const elm = s[i]
       // if element is not present than add it with the index and increment the max
       if (!hash[elm] && hash[elm] < 0) {
            hash[elm] = i
           curr_max++
       }
        // if element is present, remove all the element whose index is <=  the current element 
	// and add the current element with the updated index and recalculate the max string length
       else {
           const lastElmIndex = hash[elm]
           for (let key in hash) {
               if (hash[key] <= lastElmIndex) {
                   delete hash[key]
               }
           }
           hash[elm] = i
           curr_max = Math.max(curr_max, Object.keys(hash).length)
       }
    }
    return curr_max;
};
```


##### Add method to "String", to convert camelCase string to camel_case.

```javascript
String.prototype.toUnderscore = function () {
    var strArr = this.split("");
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].charCodeAt() >= 65 && strArr[i].charCodeAt() <= 90 ) {
             strArr[i] = strArr[i].toLowerCase();
            if (i !== 0) {
                strArr.splice(i, 0, "_");
            }
        }
        else if (strArr[i].charCodeAt() >= 97 && strArr[i].charCodeAt() <= 122 ) {
        }
        else {
            strArr.splice(i, 1, "_")
        }
    }
    return strArr.join("");
}
```

##### Flatten the nested Object

```javascript
	{
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}
```

```javascript
{
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}
```

```javascript
function flat (obj, result = {}, parentKey = []) {
	for (let key in obj) {
		const k = parentKey.length ? `${parentKey.join('.')}.${key}` : key
		if (typeof obj[key] === 'object') {
			parentKey = [...parentKey, key]
			flat(obj[key], result, parentKey)	
		}
		result[k] = obj[key];
	}
}
```

##### Create a function sum which when called sum(1,2,3....n)() or sum(1)(2)(3)...(n)() should yield same result.

```javascript
function sum(...a) {
    return function (...b) {
        if (b.length) {
            return sum(...a, ...b)
        }
        else {
            return a.reduce(function (acc, item) {
                return acc = acc + item
            }, 0)
        }
    }
}
```

##### Create a function such that sentence("I")("am")("going")("out.") should output I am going out. The last parameter will always contain full stop.

```javascript
function sentence(a) {
    if (a.indexOf('.') !== -1) {
        return a
    }
    return function (b) {
        if (b.indexOf('.') === -1) {
            return sentence(`${a} ${b}`)
        }
        else {
            return `${a} ${b}`
        }
    }
}
```

##### Get factorial
```javascript
var factorial = function (n) {
  if (n < 0) {
  	return 1;
  }
  else {
  	return n * factorial (n-1)
  }
}
```

##### Get the fibonacci series
```javascript
var fiboSeries = function (s) {
	var series = [],
  		i = 1;
  // Get element at specific location in series
  var fibo = function (n) {
    if (n<=2) {
    return 1;
    }
    else {
    return fibo(n-1) + fibo(n-2)
    }
  }
  for (;i<= s; i++) {
  	series.push(fibo(i))
  }
  return series;
}
```

