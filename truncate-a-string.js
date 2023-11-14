function truncateString(str, num) {
  let ending = ''
  if(str.length > num){
    ending = `${str.substr(0, num)}...`
  }else{
    return str
  }
  return ending;
}

truncateString("Absolutely Longer", 2);