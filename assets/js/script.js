/*--------------------------------------------Go-to-the-top-------------------------------------------------------*/
let goTop = document.querySelector('.goTop');

goTop.addEventListener('click', function(){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
})
/*----------------------------------------------------------------------------------------------------------------*/


/*--------------------------------Check-if-acttive-btn-go-tho-the-top---------------------------------------------*/
window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    let goTop = document.querySelector('.goTop');
    let boxMenu = document.getElementById('boxMenu').offsetTop - 90;
    if(scroll < boxMenu){
        goTop.style.display = 'none';
    }else{
        goTop.style.display = 'block';
    }
})
/*----------------------------------------------------------------------------------------------------------------*/