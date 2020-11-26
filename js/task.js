//__1__//////////////////////////////////////////////////////////////////////////////////////////////////
import importItms from './gallery-items.js';

const imgListRef = document.querySelector('.js-gallery');
const newGalleryCard = importItms.map(({description, preview, original}) => {
  return `
  <li class = "gallery__item">
  <a class = "gallery__link" href = '${original}'> 
  <img class  ="gallery__image" src = '${preview}' data-source = '${original}' 
      alt = '${description}'/></a></li>`;
}).join('');
      
imgListRef.innerHTML = newGalleryCard;
console.log(imgListRef);

const imgForModalData = document.querySelector('.gallery__image');
const imgForModalSrc = document.querySelector('.lightbox__image');
// imgForModalSrc.src.value = imgLinkValue;
// console.log(imgForModalSrc);

const closeModalRef = document.querySelector('button[data-action="close-lightbox"]');
const openModalRef = document.querySelector('.div.lightbox');
const backDropRef = document.querySelector('.lightbox__image');

imgListRef.addEventListener('click', onOpenModal);
closeModalRef.addEventListener('click', onCloseModal);

function onOpenModal (event) {
  event.PreventDefault();
  if (event.target.nodeName === 'IMG') {
    openModalRef.classList.add("is-open");
    backDropRef.classList.add("is-open");
    imgForModalSrc.src = event.target.href;
    imgForModalSrc.alt = event.target.alt;
    console.log(imgForModalSrc);
  }
  window.addEventListener('keydown', onESCpress);
};

function onCloseModal (event) {
  event.preventDefault();
  window.removeEventListener('keydown', onESCpress);

  if (event.target === event.currentTarget) {
    document.body.classList.remove("is-open");
    backDropRef.classList.remove("is-open");
    imgForModalSrc.setAttribute('src', '');
  }
};

function onESCpress (event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}; 



// if(e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
//   refs.lightbox.classList.remove('is-open');
// }




// var gallery = document.querySelector('.gallery__image').attributes;
// // for (let attr of gallery) {           
// //   console.log( `${attr.name} = ${attr.value}` );
// // }


// const newArr = [];
// // var gallery = gallery.attributes;                   
// const fn = function() {
//   for (var i = 1; i < gallery.length; i++) {
//     newArr.push( gallery[i].value );
//     console.log(newArr);
//   }
// }
// // console.log(fn());