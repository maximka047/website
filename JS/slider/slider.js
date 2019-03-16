window.onload = function(){ 
    let imgs = document.querySelectorAll('.images img');
    i = 0;

   function  autoSlide(){
        imgs[i].className='';
        if (i == imgs.length-1){
            i = 0;
        }
        i++;
    imgs[i].className ='showed';
    }
    setInterval(autoSlide, 3000)
}
