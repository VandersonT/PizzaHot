/*Options animation*/
let options = document.querySelectorAll('.optionSingle');

for(let i = 0; i < options.length; i++){
    options[i].addEventListener('mousemove', function(){
        options[i].querySelector('img').style.transform = 'scaleX(-1)';
    })
    options[i].addEventListener('mouseout', function(){
        options[i].querySelector('img').style.transform = 'scaleX(1)';
    })
}
/***/

animationItens();
function animationItens(){
    let ItemSingle = document.querySelectorAll('.ItemSingle');
    for(let i = 0; i < ItemSingle.length; i++){
        ItemSingle[i].addEventListener('mousemove', function(){
            ItemSingle[i].querySelector('.boxAction').style.display = 'flex';
        })
        ItemSingle[i].addEventListener('mouseout', function(){
            ItemSingle[i].querySelector('.boxAction').style.display = 'none';
        })
    }
}