const findNemo = (sentence) => {
    const index = sentence.split(' ').indexOf("Nemo");
    return index !== -1 ? `I found Nemo at ${index + 1}!` : "Nemo not found";
  };
  
  console.log(findNemo("I am finding Nemo !")); 

  