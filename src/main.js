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

  clearGallery();
  await renderList();

  event.target.reset();
};

form.addEventListener('submit', onFormSubmit);
async function renderList() {
  showLoader();
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
      hideLoadMoreButton();
      return;
    }

    createGallery(hits, page);
    if (page * 15 >= totalHits) {
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
