/*Open/close menu mobile*/
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

/*Close menu when clicking button*/
let btnsMenuMobile = document.querySelectorAll('.menuMobile a');
for(let i = 0; i < btnsMenuMobile.length; i++){
    btnsMenuMobile[i].addEventListener('click', function(){
        btnMenuMobile.click();
    })
}