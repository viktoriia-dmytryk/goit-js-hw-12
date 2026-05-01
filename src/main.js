import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadBtn = document.querySelector('.load-btn');

let page = 1;
let query = '';
const onLoadBtnClick = async event => {
  page++;

  await renderList();
};

loadBtn.addEventListener('click', onLoadBtnClick);

const onFormSubmit = async event => {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();
  if (!query) return;
  page = 1;
  hideLoadMoreButton();
  clearGallery();
  await renderList();

  event.target.reset();
};

form.addEventListener('submit', onFormSubmit);
async function renderList() {
  showLoader();
  hideLoadMoreButton();
  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (!hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#ef4040',
        position: 'topRight',
        messageSize: '16px',
        messageColor: 'white',
      });

      return;
    }
    // *Скрол
    createGallery(hits, page);
    const cards = document.querySelectorAll('.gallery-item');
    const firstNewCard = cards[cards.length - hits.length];

    if (firstNewCard) {
      firstNewCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // if (page > 1) {
    //   const card = document.querySelector('.gallery-item');

    //   if (card) {
    //     const cardHeight = card.getBoundingClientRect().height;
    //     console.log(cardHeight);
    //     window.scrollBy({
    //       top: cardHeight * 2,
    //       behavior: 'smooth',
    //     });
    //   }
    // }

    if (page * 15 >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong',
    });
  } finally {
    hideLoader();
  }
}
