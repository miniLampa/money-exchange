module.exports = function makeExchange(currency) {
  
  if (currency > 10000 ){
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  let result = {};
  let money = {
    "H": 50 ,
    "Q": 25 ,
    "D": 10 ,
    "N": 5 ,
    "P": 1
  };

  if ( currency > 0){
    let incomingMoney = currency;

    while ( incomingMoney > 0 ){
      for (let key in money){
        if (Math.floor(incomingMoney / money[key]) > 0 ){
          result[key] = Math.floor(incomingMoney / money[key]);
        }
        incomingMoney = incomingMoney % money[key];
      }
    }
  }

  return result;
}