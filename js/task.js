// 1. Создание и рендер разметки по массиву данных и предоставленному шаблону.
// 2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// 3. Открытие модального окна по клику на элементе галереи.
// 4. Подмена значения атрибута src элемента img.lightbox__image.
// 5. Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6. Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, 
//    чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

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

//__2__//////////////////////////////////////////////////////////////////////////////////////////////////

const imgForModal = document.querySelector('.lightbox__image');
const enptyUrl = imgForModal.getAttribute('src', '');

const openModalRef = document.querySelector('.div.lightbox');
const closeModalRef = document.querySelector('button[data-action="close-lightbox"]');
// const backDropRef = document.querySelector('.js-lightbox');

imgListRef.addEventListener('click', onOpenModal);
closeModalRef.addEventListener('click', onCloseModal);

function onOpenModal (event) {
  event.PreventDefault();
  window.addEventListener('keydown', onESCpress);
  
  if (event.target.nodeName === 'IMG') {
    enptyUrl.src.innerHTML = '${importItms.original}';
    document.body.classList.add(".is-open");
  }
};

function onCloseModal (event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    enptyUrl.src.innerHTML = '${importItms.prewiev}';
    document.body.classList.remove(".is-open");
  }
};

function onESCpress (event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}; 
