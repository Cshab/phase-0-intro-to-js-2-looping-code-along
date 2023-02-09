


const newBee = ''
function writeCards(on,sup){
   

    for(let i = 0; i < on.length; i++){
       newBee  = `Thank you, ${on[i]}, for the wonderful ${sup} gift!`
     
}
return newBee
}
writeCards(["Guadalupe", "Ollie", "Aki"],"surprise")


function countDown(numb){

    // for(let i = 0; i <= numb; i--){
        
    // }
     while(numb >= 0){
        
         console.log(numb)
         numb--
        
     }
 }
 countDown(10)