//file-name : operations.js

var ops = "-2 5 D + R";
var arr = [];
export function operations(){
    var numbers = ops.slice(0,2);
    var lastChar = numbers[numbers.length - 1]; 
   ops = ops.split(" ");
   for ( var i = 0; i < ops.length; i++) {
    if (!isNaN(ops[i])) {
        arr.push(ops[i]);
    }
    if (ops[i] === "D") {
        var numbers = ops.slice(0,2);
        var lastChar = numbers[numbers.length - 1]; 
      lastChar = lastChar * 2;
      arr.push(lastChar);
    }
    if (ops[i] === "+") {
    var sum = parseInt(arr[1]) + parseInt(arr[2]);
    arr.push(sum);
  }
   
  if (ops[i] === "R") {
    arr.pop();
  }
   }
  
  var total = 0
  for (var i = 0; i < arr.length; i++) {
   total += parseInt(arr[i]);

  }
  arr = [];
  arr.push(total);
   console.log(ops); 
   console.log(arr); 

   }


   export default operations();
