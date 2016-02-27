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
