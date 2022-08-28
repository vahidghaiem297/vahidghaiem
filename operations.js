//file-name : operations.js

var ops = "-2 5 D + R";
var arr = [];
function operations(){
    var numbers = ops.slice(0,2);
    var lastChar = numbers[numbers.length - 1]; 
   ops = ops.split(" ");
   for ( var i = 0; i < ops.length; i++) {
    if (!isNaN(ops[i]) && ops[i].includes('D')) {
        arr.push(ops[i]);
    }
    if (ops[i] === "D") {
        var numbers = ops.slice(0,2);
        var lastChar = numbers[numbers.length - 1]; 
      lastChar = lastChar * 2;
      arr.push(lastChar);
    }
   if (ops[i] === '+') {
       
        var lastChar = numbers[numbers.length - 1];
         var sum = parseInt(arr[2]) + parseInt(arr[1]);
       arr.push(sum);
    }
   if (ops[i] === 'R') {
       
        var lastChar = numbers[numbers.length - 1];
       arr.pop();
    }

    

   
   }
  
  
   console.log(ops); 
   console.log(lastChar); 
   console.log(arr.length); 
   }


operations();
