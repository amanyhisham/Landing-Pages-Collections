let img=document.querySelector('.img');
let container=document.querySelector('.container');

function photo(src_new){
    img.src=src_new;
}

function background(color){
container.style.background=color;
    container.style.transition = 'background 0.5s ease'; // عشان التغيير يبقى ناعم

}
  