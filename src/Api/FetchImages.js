import axios from 'axios';
const imageApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

const imagesFetch = async ({ page = 1, searchQuery = '' }) => {
  const response = await imageApi.get('/', {
    params: {
      q: searchQuery,
      page,
      key: '34529006-3c10d9bcc86ff9877d3df17d5',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};

export default imagesFetch;