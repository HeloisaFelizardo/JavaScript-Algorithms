function repeatStringNumTimes(str, num) {
  let accumulatedStr  = ''
  if(num > 0){
    for(let i = 0; i < num; i++){
            accumulatedStr  += str        
      }      
      return accumulatedStr;
  }else{
      return ''
  }
  
  
}

repeatStringNumTimes("abc", 3);