const capLast = (str) =>
    str.split(' ').map(word =>
      word.slice(0, -1) + word.slice(-1).toUpperCase()
    ).join(' ');
  
  console.log(capLast("hello world")); 

  