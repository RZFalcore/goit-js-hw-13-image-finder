import InfiniteScroll from 'infinite-scroll';
import listItemTmp from '../templates/listItem.hbs';

// import api from '../services/axios';
// import searchForm from '../templates/searchForm.hbs';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('#search-form'),
  galery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const querry = e.target.elements[0].value;
  console.log(querry);

  refs.galery.innerHTML = '';

  const infScrollInstance = new InfiniteScroll(refs.galery, {
    history: false,
    responseType: 'text',
    path() {
      return `https://cors-anywhere.herokuapp.com/pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=13203870-f88321e1576e2ee35198d8add&q=${querry}&page=${this.pageIndex}`;
    },
  });

  infScrollInstance.pageIndex = 1;

  infScrollInstance.on('load', response => {
    const images = JSON.parse(response);
    console.log(images);

    const markup = images.hits.map(image => listItemTmp(image)).join('');

    const proxyEl = document.createElement('div');
    proxyEl.innerHTML = markup;

    const parsedItems = proxyEl.querySelectorAll('.photo-card');

    infScrollInstance.appendItems(parsedItems);
  });
  infScrollInstance.loadNextPage();

  // api.fetchQuerry(querry).then(data => {
  //   console.log(data);

  //   const markup = data.map(item => listItemTmp(item)).join('');

  //   refs.galery.insertAdjacentHTML('beforeend', markup);
  // });
});
