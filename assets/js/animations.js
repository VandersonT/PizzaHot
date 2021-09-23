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