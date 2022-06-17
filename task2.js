const roundNumber=(num)=>{
    let remainder=num%5;

    if(remainder===0){
        console.log(num);
    }
    else if(remainder>=2.5){
        console.log(num-remainder+5);
    }
    else if(remainder <=2.5){
        console.log(num-remainder);
    }
}

roundNumber(33.3);

//20 minutes
