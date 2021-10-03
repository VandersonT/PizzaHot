let btnMenuMobile = document.querySelector('.btnMenuMobile');
let menuMobile = document.querySelector('.menuMobile');
let isOpen = false;

btnMenuMobile.addEventListener('click', function(){
    if(isOpen){
        menuMobile.style.display = 'none';
    }else{
        menuMobile.style.display = 'flex';
    }
    isOpen = !isOpen;
})