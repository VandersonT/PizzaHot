/*--------------------------------------------Global-Variables-----------------------------------------------------*/
let amount = document.querySelectorAll('.boxDepositions  .depositionSingle').length;
/*-----------------------------------------------------------------------------------------------------------------*/





if(amount > 1){

    createControlls(amount);
    
}else{
    box.innerHTML = "Tem depoimento nao";
}






/*--------------------------------------------Functions-Helpers----------------------------------------------------*/
function createControlls(amount){
    for(let i = 0; i < amount; i++){
        let teste = document.createElement("span");
        document.querySelector('.controls').appendChild(teste);
    }
}
/*-----------------------------------------------------------------------------------------------------------------*/