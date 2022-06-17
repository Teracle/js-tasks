const formatWord=(num)=> {  
    let words=["компьютер","компьютера","компьютеров"];

    num = num % 100; 
    let num2 = num % 10;

    if (num > 10 && num < 20) {
        console.log(num+ " "+words[2]);
    }

    if (num2 > 1 && num2 < 5) {
         console.log(num2+ " "+words[1]);
    }

    if (num2 == 1) {
        console.log(num+ " "+words[0]); 
    }
    
    else{
        console.log(num+ " "+words[2]);
    }
      
}

formatWord(25);
formatWord(41);
formatWord(48);

//~20 minutes
