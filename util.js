//function to get factorial
var factorial = function (n) {

  if (n < 0) {
  	return 1;
  }
  else {
  	return n * factorial (n-1)
  }
}

//function to get the fibonacci series
var fiboSeries = function (s) {
	var series = [],
  		i = 1;
  		// function to get element at specific location in series
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


// function to check if prime or not
var prime = function (n) {
	var i = 2,
  		ret = true;
  
  for (; i< n-1; i++) {
  	if (n%i === 0) {
    	ret = false;
      break;
    }
  }
  
  return ret;
}


// Added method to "String".. to convert camelCase string to camel_case. 
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

// INPUT
// obj = {
//     "key": 3,
//     "foo": {
//         "a": 5,
//         "bar": {
//             "baz": 8
//         }
//     }
// }

// OUTPUT

// {
//     "key": 3,
//     "foo.a": 5,
//     "foo.bar.baz": 8
// }

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
