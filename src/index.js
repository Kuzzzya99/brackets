module.exports = function check(str, bracketsConfig) {
 
  let string = str;
  for (let j = 0; j < str.length; j++)
  for (let i = 0; i < bracketsConfig.length; i++) {
    let bracketsPair = bracketsConfig[i][0]+bracketsConfig[i][1];
    while (true) {
      if (string.includes(bracketsPair)) string = string.replace(bracketsPair, '')
      else break;
    }
  }
  return (string.length === 0)
  }
