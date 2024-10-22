const charIndex = (palabra, char) => {
    const first = palabra.indexOf(char);
    const last = palabra.lastIndexOf(char);
    return first === -1 ? [] : [first, last];
  };
  
  console.log(charIndex("hello", "l")); 
  console.log(charIndex("circumlocution", "c")); 

  