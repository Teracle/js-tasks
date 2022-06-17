const compareArrays=(arr1, arr2)=>{
    let result = [];
    let array1 = arr1.slice(0); 

    for(let i = 0; i < array1.length; i++){
        if(result.includes(array1[i])) {
            continue;
        }

        delete array1[i];

        if (array1.includes(arr1[i]) && arr2.includes(arr1[i])) { 
            let array2 = arr2.slice(0); 
            delete array2[array2.indexOf(arr1[i])];

            if(array2.includes(arr1[i])){
                    result.push(arr1[i]) ;  
            } 
        }
    }
    return result;
}


console.log(compareArrays([7,17,1,9,1,17,56,56,23],[56, 17, 17, 1, 23, 34, 23, 1, 8, 1]));