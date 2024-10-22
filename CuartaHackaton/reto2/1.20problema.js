String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/gi, vowel);
  };
  
  console.log("apples and bananas".vreplace("u")); 

  