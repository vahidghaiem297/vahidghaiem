//file-name : remove-repetitive.js
function removeRepetitive(element){
  
    var element = element.split("");
    return element.filter((item, index)=> element.indexOf(item) === index);

}
console.log(removeRepetitive('fdfsffgsfgf'));