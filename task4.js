const checkNum=(num)=> {
    let result='';
    let sqrt = Math.sqrt(num);
    let composite=false;
    
    if (num == 2 || num == 3){

       console.log("Простое число");
       

    } else if(num % 2 == 0 || num % 3 == 0) {

        console.log("Сложное число");
        

    } else{

        for(let i = 5; i <= sqrt; i += 6){
            if (num % i == 0){
                composite=true;
                break;
            }
        }
    
        if (!composite){
            for(let i=7; i <= sqrt; i += 6){
                if (num % i == 0){
                    composite=true;
                    break;
                }
            }
        }

        
        if (composite){
            result = 'Сложное число';
        } else {
            result = 'Простое число';
        }

    }
   
    return result;

}

console.log(checkNum(55));