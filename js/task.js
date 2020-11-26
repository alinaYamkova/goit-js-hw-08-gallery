//__1__//////////////////////////////////////////////////////////////////////////////////////////////////
import importItms  from './gallery-items.js';

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
const imgForModal = document.querySelector('img.lightbox__image');
// const dataSour = imgForModal.getAttribute('data-source').value;


const closeModalRef = document.querySelector('button[data-action="close-lightbox"]');
const openModalRef = document.querySelector('.lightbox .js-lightbox');
const backDropRef = document.querySelector('.lightbox__image');

imgListRef.addEventListener('click', onOpenModal);
closeModalRef.addEventListener('click', onCloseModal);


// imgListRef.addEventListener('click', (event) => {
function onOpenModal (event) {
  if (event.target.nodeName === 'IMG') {
    openModalRef.classList.add("is-open");
    backDropRef.classList.add("is-open");
    imgForModal.src = event.target.dataset.source;
    imgForModal.alt = event.target.alt;
    // console.log(dataSour);
  }

  event.PreventDefault();
  window.addEventListener('keydown', onESCpress);
};

// closeModalRef.addEventListener('click', (event) => {
function onCloseModal (event) {
  if (event.target === event.currentTarget) {
    document.body.classList.remove("is-open");
    backDropRef.classList.remove("is-open");
    imgForModal.src = DefaultValue;
  }
  
  event.preventDefault();
  window.removeEventListener('keydown', onESCpress);
};

function onESCpress (event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}; 
