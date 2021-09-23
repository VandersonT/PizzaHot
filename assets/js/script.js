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

}

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
    });
}