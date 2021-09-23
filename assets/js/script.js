/*--------------------------------------------Each amount of option------------------------------------------------*/
let amount = document.querySelectorAll('.optionSingle p');
amount[0].innerHTML = pizzaJson.length+' opções';
amount[1].innerHTML = drinkJson.length+' opções';
amount[2].innerHTML = candyJson.length+' opções';
amount[3].innerHTML = pastelJson.length+' opções';
/*-----------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------map-----------------------------------------------------------*/
let optionSelected = 'pizza';
let optionSingle = document.querySelectorAll('.optionSingle');

for(let i = 0; i < optionSingle.length; i++){
    optionSingle[i].addEventListener('click', function(){
        let value = optionSingle[i].getAttribute('value');
        optionSelected = value;
        map();
    })
}

map();
function map(){

    /*Reset box*/
    document.querySelector('.items').innerHTML = '';

    switch(optionSelected){
        case 'pizza':
            insertPizzas();
            break;
        case 'drink':
            insertDrinks();
            break;
        case 'candy':
            insertCandys();
            break;
        case 'pastel':
            insertPasteis();
            break;
    }
    animationItens();

}
/*-----------------------------------------------------------------------------------------------------------------*/



/*------------------------------------------------FUNCTIONS--------------------------------------------------------*/
function insertPizzas(){
    pizzaJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
        
        document.querySelector('.items').append(pizzaItem);
    });
}

function insertDrinks(){
    drinkJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
    
        document.querySelector('.items').append(pizzaItem);
    });
}

function insertCandys(){
    candyJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
    
        document.querySelector('.items').append(pizzaItem);
    });
}

function insertPasteis(){
    pastelJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
    
        document.querySelector('.items').append(pizzaItem);
        document.querySelector('.items').style.display = 'flex';
    });
}
/*-----------------------------------------------------------------------------------------------------------------*/
