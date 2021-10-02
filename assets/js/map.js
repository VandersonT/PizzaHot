/*-----------------------------------------------Default-Values----------------------------------------------------*/
let optionSelected = 'pizza';
let yourCart = [];
/*-----------------------------------------------------------------------------------------------------------------*/



/*-----------------------------------------------First-Actions-----------------------------------------------------*/
itemsAmount();
getOptionSelected();
map();
animationOptions();
menuEachItem();
closeWarning();
closeSeeMore();
/*-----------------------------------------------------------------------------------------------------------------*/



/*---------------------------------------------------maps-----------------------------------------------------------*/;
function map(){

    /*Reset-items-box*/
    document.querySelector('.items').innerHTML = '';

    /*Insert selected items*/
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

    /*Update interactions with each item*/
    menuEachItem();
    kartAction();
    favoriteAction();
    seeMoreAction();
}
/*-----------------------------------------------------------------------------------------------------------------*/



/*------------------------------------------------FUNCTIONS--------------------------------------------------------*/

function getOptionSelected(){
    let optionSingle = document.querySelectorAll('.optionSingle');

    for(let i = 0; i < optionSingle.length; i++){
        optionSingle[i].addEventListener('click', function(){
            let value = optionSingle[i].getAttribute('value');
            optionSelected = value;
            map();
        })
    }
}

function insertPizzas(){
    pizzaJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
        pizzaItem.querySelector('.boxAction').setAttribute('id', index);

        document.querySelector('.items').append(pizzaItem);
    });
}

function insertDrinks(){
    drinkJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
        pizzaItem.querySelector('.boxAction').setAttribute('id', index);

        document.querySelector('.items').append(pizzaItem);
    });
}

function insertCandys(){
    candyJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
        pizzaItem.querySelector('.boxAction').setAttribute('id', index);

        document.querySelector('.items').append(pizzaItem);
    });
}

function insertPasteis(){
    pastelJson.map((item, index)=>{
        let pizzaItem = document.querySelector('.models .ItemSingle').cloneNode(true);
    
        pizzaItem.querySelector('img').src = item.img;
        pizzaItem.querySelector('h1').innerHTML = item.name;
        pizzaItem.querySelector('p').innerHTML = 'R$ '+item.price.toFixed(2);
        pizzaItem.querySelector('.boxAction').setAttribute('id', index);

        document.querySelector('.items').append(pizzaItem);
        document.querySelector('.items').style.display = 'flex';
    });
}

function animationOptions(){
    let options = document.querySelectorAll('.optionSingle');

    for(let i = 0; i < options.length; i++){
        options[i].addEventListener('mousemove', function(){
            options[i].querySelector('img').style.transform = 'scaleX(-1)';
        })
        options[i].addEventListener('mouseout', function(){
            options[i].querySelector('img').style.transform = 'scaleX(1)';
        })
    }
}

function menuEachItem(){
    let ItemSingle = document.querySelectorAll('.ItemSingle');
    for(let i = 0; i < ItemSingle.length; i++){
        let windowWidth = window.innerWidth;
        if(windowWidth >= 1000){
            ItemSingle[i].addEventListener('mousemove', function(){
                ItemSingle[i].querySelector('.boxAction').style.display = 'flex';
            })
            ItemSingle[i].addEventListener('mouseout', function(){
                ItemSingle[i].querySelector('.boxAction').style.display = 'none';
            })
        }
    }
}

function itemsAmount(){
    let amount = document.querySelectorAll('.optionSingle p');
    amount[0].innerHTML = pizzaJson.length+' opções';
    amount[1].innerHTML = drinkJson.length+' opções';
    amount[2].innerHTML = candyJson.length+' opções';
    amount[3].innerHTML = pastelJson.length+' opções';
}

function verifyCartNotification(){
    let notification = document.querySelector('.notification');
    let qtd = 0;

    if(yourCart.length > 0){
        for(let i = 0; i < yourCart.length; i++){
            qtd = qtd + yourCart[i]['qtd'];
        }

        notification.style.display = 'block';
        notification.innerHTML = qtd;
    }

}

function kartAction(){
    let btnKart = document.querySelectorAll('.btnKart');

    for(let i = 0; i < btnKart.length; i++){
        btnKart[i].addEventListener('click', function(){
            let idItemChoosen = btnKart[i].closest('.boxAction').getAttribute('id');
            let oneMore = false;

            for(let i = 0; i < yourCart.length; i++){
                if(yourCart[i]['id'] == idItemChoosen && yourCart[i]['type'] == optionSelected){
                    yourCart[i]['qtd'] = yourCart[i]['qtd'] + 1;
                    oneMore = true;
                }
            }

            if(!oneMore){
                yourCart.push({id:idItemChoosen, type:optionSelected, qtd: 1});
            }

            verifyCartNotification();

            alert("Produto adicionado ao seu carrinho.");
        })
    }
}

function favoriteAction(){
    let btnFavorite = document.querySelectorAll('.btnFavorite');
    let warning = document.querySelector('.favoriteAdded');

    for(let i = 0; i < btnFavorite.length; i++){
        btnFavorite[i].addEventListener('click', function(){
            let itemName = btnFavorite[i].closest('.ItemSingle').querySelector('h1').innerText;

            warning.querySelector('p').innerHTML = 'Você adicionou o item "'+itemName+'" aos seus favoritos.';
            warning.style.display = 'block';

        })
    }
}

function seeMoreAction(){
    let btnSeeMore = document.querySelectorAll('.btnSeeMore');
    let boxSeeMore = document.querySelector('.boxSeeMore');

    for(let i = 0; i < btnSeeMore.length; i++){
        btnSeeMore[i].addEventListener('click', function(){
            let id = btnSeeMore[i].closest('.boxAction').getAttribute('id');
            
            switch(optionSelected){
                case 'pizza':
                    boxSeeMore.querySelector('.seeMore img').src = pizzaJson[id]['img'];    
                    boxSeeMore.querySelector('.pizzaInfo > p').innerHTML = pizzaJson[id]['description'];
                    boxSeeMore.querySelector('.pizzaInfoSingle p').innerHTML = pizzaJson[id]['name'];
                    break;
                case 'drink':
                    boxSeeMore.querySelector('.seeMore img').src = drinkJson[id]['img'];    
                    boxSeeMore.querySelector('.pizzaInfo > p').innerHTML = drinkJson[id]['description'];
                    boxSeeMore.querySelector('.pizzaInfoSingle p').innerHTML = drinkJson[id]['name'];
                    break;
                case 'candy':
                    boxSeeMore.querySelector('.seeMore img').src = candyJson[id]['img'];    
                    boxSeeMore.querySelector('.pizzaInfo > p').innerHTML = candyJson[id]['description'];
                    boxSeeMore.querySelector('.pizzaInfoSingle p').innerHTML = candyJson[id]['name'];
                    break;
                case 'pastel':
                    boxSeeMore.querySelector('.seeMore img').src = pastelJson[id]['img'];    
                    boxSeeMore.querySelector('.pizzaInfo > p').innerHTML = pastelJson[id]['description'];
                    boxSeeMore.querySelector('.pizzaInfoSingle p').innerHTML = pastelJson[id]['name'];
                    break;
            }
            
            boxSeeMore.style.display = 'block';
        })
    }
}

function closeWarning(){
    let btnCloseWarning = document.querySelector('.closeWarning');
    let warning = document.querySelector('.favoriteAdded');

    btnCloseWarning.addEventListener('click', function(){
        warning.style.display = 'none';
    })
}

function closeSeeMore(){
    let btnCloseSeeMore = document.querySelector('.closeSeeMore');
    let boxSeeMore = document.querySelector('.boxSeeMore');

    btnCloseSeeMore.addEventListener('click', function(){
        boxSeeMore.style.display = 'none';
    })

}

/*-----------------------------------------------------------------------------------------------------------------*/