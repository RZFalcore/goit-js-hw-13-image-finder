import axios from 'axios';

export default {
  page: 1,
  baseURL:
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=13203870-f88321e1576e2ee35198d8add',
  async fetchQuerry(querry) {
    try {
      const response = await axios.get(
        this.baseURL + `&q=${querry}` + `&page=${this.page}`,
      );

      return response.data.hits;
    } catch (error) {
      console.error(error);
    }
  },
};
