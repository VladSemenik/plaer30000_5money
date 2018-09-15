// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};
    money(currency);
    function money(currency){
        if(currency>10000){
            result['error'] = "You are rich, my friend! We don't have so much coins for exchange";
        }else{
            if(currency>=50){
                result["H"] = Math.floor(currency/50);
                currency = currency-50*Math.floor(currency/50);
                money(currency);
            }else{
                if(currency>=25){
                    result["Q"] = Math.floor(currency/25);
                    currency = currency-25*Math.floor(currency/25);
                    money(currency);
                }else{
                    if(currency>=10){
                        result["D"] = Math.floor(currency/10);
                        currency = currency-10*Math.floor(currency/10);
                        money(currency);
                    }else{
                        if(currency>=5){
                            result["N"] = Math.floor(currency/5);
                            currency = currency-5*Math.floor(currency/5);
                            money(currency);
                        }else{
                            if(currency>=1){
                                result["P"] = currency;
                                currency = 0;
                                money(currency);
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}
