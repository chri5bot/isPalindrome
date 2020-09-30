function isPalindrome(text){
  
  if (text.length === 1) return true
  
  let repeats = {}
  
  for (let i = 0; i < text.length; i++){
   	let character = text.charAt(i)
    repeats[character] = (isNaN(repeats[character]) ? 1 : repeats[character] + 1);
  }
  
  const listRepeats = Object.values(repeats)
  
  let countEvens = 0
  let countOdds = 0
  
  for (let j = 0; j < listRepeats.length; j++){
  	if (listRepeats[j] % 2 === 0) countEvens++;
    if (listRepeats[j] % 2 === 1) countOdds++;
  }
    
  return countOdds <= 1 && countEvens > 0;
}
