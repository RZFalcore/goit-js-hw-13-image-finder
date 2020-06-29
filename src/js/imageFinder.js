import api from '../services/axios';
import searchForm from '../templates/searchForm.hbs';

api.fetchQuerry('cats');

const refs = {
  body: document.querySelector('body'),
};

console.log(refs.body);
