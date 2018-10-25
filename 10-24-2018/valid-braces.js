function validBraces(braces) {
  console.log(braces) 
  if (braces.length % 2 === 0) {

    let top = -1;
    let holder = [];
    holder[++top] = braces[0];
    if(holder[top] === ')' || holder[top] === '}' || holder[top] === ']') {
        return false;
    }
    console.log(holder)

    for (let i = 1; i < braces.length; i++) {
      console.log(braces[i]);
      if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
        holder[++top] = braces[i];
        console.log(top)
      }

      else {
          if (holder[top] === '(' && braces[i] === ')') {
                holder.splice(-1,1);
                top -= 1;
                
          }

          else if (holder[top] === '[' && braces[i] === ']') {
                holder.splice(-1,1);
                top -= 1;
          }

          else if (holder[top] === '{' && braces[i] === '}') {
                holder.splice(-1,1);
                top -= 1;
                 
          }

          else {
              
              return false;
          }
      }

    }
    if(top === -1) {
        return true;
    }
    return false;
    // Check if they are opening tags => add to holder
    // If its a closing one 
        // Check if pairs with top if true remove those two
        // else if false return false


  } else {
    return false;
  }
}

console.log(validBraces('{}({})[]'), true);
// console.log(validBraces('[(])'), false);
