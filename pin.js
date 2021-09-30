document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = document.getElementById("pin");
    function generator(){
    let generated = (Math.random() * 10000+"").split(".")[0];
    if(generated.length>=4){
     pin.value = generated;
    document.getElementById("pin").innerText = generated;
    }
    else{
        generator();
    }
    }
    generator();
   
    
})
function verify(correctPin,incorrectPin){
    const correct = document.getElementById("correct");
    const Incorrect = document.getElementById("incorrect");

   
    correct.style.display=correctPin;
    Incorrect.style.display =incorrectPin;

    
    
}

document.getElementById("submit").addEventListener("click", function (){

    const pin =document.getElementById("pin");
    const pinNumber = pin.value;

    const userNumber= document.getElementById("userNumber");
    const userPin = userNumber.value;

    if(pinNumber === userPin && userPin!=''){
        
        verify("block","none");
        
    }
    else{
        
        verify("none","block");
        
  
    }

})

