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
const closeModalRef = document.querySelector('[data-action="close-lightbox"]');
const openModalRef = document.querySelector('.js-lightbox');

const backDropRef = document.querySelector('.lightbox__overlay');

imgListRef.addEventListener('click', onOpenModal);
closeModalRef.addEventListener('click', onCloseModal);
backDropRef.addEventListener('click', onCloseModal);

function onOpenModal (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  openModalRef.classList.add("is-open");
  imgForModal.src = event.target.dataset.source;
  imgForModal.alt = event.target.alt;
  window.addEventListener('keydown', onESCpress);
};

function onCloseModal (event) {
  openModalRef.classList.remove("is-open");
  imgForModal.src = "";
  imgForModal.alt = "";
  window.removeEventListener('keydown', onESCpress);
};

function onESCpress (event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}; 
