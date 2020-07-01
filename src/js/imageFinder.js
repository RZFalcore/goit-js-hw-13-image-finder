import api from '../services/axios';
import searchForm from '../templates/searchForm.hbs';
import listItemTmp from '../templates/listItem.hbs';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('#search-form'),
  galery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const querry = e.target.elements[0].value;
  api.fetchQuerry(querry).then(data => {
    console.log(data);
    const markup = data.map(item => listItemTmp(item)).join('');
    refs.galery.insertAdjacentHTML('beforeend', markup);
  });
});
