/*------------------------------------------------Settings---------------------------------------------------------*/
let startIn = 1; //don't use 0 here
let waitingTime = 6000; //use milliseconds here
/*-----------------------------------------------------------------------------------------------------------------*/



let amount = document.querySelectorAll('.boxDepositions  .depositionSingle').length;

if(amount > 1){
    createControlls(amount);
    slideStart(startIn);
}else{
    let box = document.querySelector('.boxDepositions');
    box.innerHTML = "<h1 class='empty'>Não temos nenhum depoimento disponivel no momento!</h1>";
}



/*------------------------------------------------Functions---------------------------------------------------------*/
function createControlls(amount){
    for(let i = 0; i < amount; i++){
        let teste = document.createElement("span");
        document.querySelector('.controls').appendChild(teste);
    }
}

function slideStart(startIn){
    /*inicial*/
    let balls = document.querySelectorAll('.controls span');
    let depositions = document.querySelectorAll('.depositionSingle');
    startIn = startIn -1;

    balls[startIn].classList.add('controlsSelected');
    depositions[startIn].style.display = 'flex';

    /*Loop*/
    let depositionsLoop = setInterval(function(){
        for(let i = 0; i < amount; i++){
            if(balls[i].classList.contains('controlsSelected')){
                balls[i].classList.remove('controlsSelected')
                depositions[i].style.display = 'none';
            }
        }

        if(startIn < amount-1){
            startIn++;
            balls[startIn].classList.add('controlsSelected');
            depositions[startIn].style.display = 'flex';
        }else{
            startIn = 0;
            balls[startIn].classList.add('controlsSelected');
            depositions[startIn].style.display = 'flex';
        }

    }, waitingTime)

    for(let i = 0; i < amount; i++){
        balls[i].addEventListener('click', function(e){
            clearInterval(depositionsLoop);
            for(let i = 0; i < amount; i++){
                if(balls[i].classList.contains('controlsSelected')){
                    balls[i].classList.remove('controlsSelected')
                    depositions[i].style.display = 'none';
                }
            }
            slideStart(i+1);
        })
    }

}

/*-----------------------------------------------------------------------------------------------------------------*/