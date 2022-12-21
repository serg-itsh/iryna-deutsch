let offset = 0; 
const sliderLine = document.querySelector('.slider-line');

const btnNext = document.querySelector('.slider-next')

btnNext.addEventListener('click', function(){
        offset += 230;
        if(offset > 920){
            offset = 920;
            // btnNext.setAttribute('disabled', true)
        }
        sliderLine.style.left = -offset + 'px';
    })

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset += 800;
//     if(offset > 2400){
//         offset = 2400;
//     }
//     sliderLine.style.left = -offset + 'px';
// })

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= 230;
    if(offset < 0){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

// document.querySelector('.slider-prev').addEventListener('click', function(){
//     offset -= 800;
//     if(offset < 0){
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// })