window.onload = function(){
    let photos = document.querySelectorAll('.photo img');
    let bigPhoto = document.querySelector('.bph img');
    
    for(let i = 0; i < photos.length-1;i++){
        photos[i].onclick = function(){
            bigPhoto.src = this.src
        }
    }
}