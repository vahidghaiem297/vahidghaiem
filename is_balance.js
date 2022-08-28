
//filename : is-balance.js
function isBalance(expr)
{
      
  
    let stack = [];
  
  
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
  
        if (x == '(' || x == '[' || x == '{')
        {
              
       
            stack.push(x);
            continue;
        }
  

        if (stack.length == 0)
            return false;
              
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
  
  
    return (stack.length == 0);
}
  

let expr = "([{}])";
  

if (isBalance(expr))
     document.write("Balanced ");
else
    document.write("Not Balanced ");
  

  
