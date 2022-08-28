//file-name : remove-repetitive.js
export function removeRepetitive(element){
  
    var element = element.split("");
    return element.filter((item, index)=> element.indexOf(item) === index);

}
export default removeRepetitive('fdfsffgsfgf');