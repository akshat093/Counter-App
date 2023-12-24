const countValue= document.querySelector('#counter');

const increment = () =>{
    // get the value from ui 
    let value = parseInt(countValue.innerText);
    //set the value 
    value = value+1;
    //update the value into ui 
    countValue.innerText= value;
}

const decrement =() =>{
    // get the value from ui 
    let value = parseInt(countValue.innerText);
    //set the value 
    value = value-1;
    //update the value into ui 
    countValue.innerText= value;
}