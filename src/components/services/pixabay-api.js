import axios from 'axios';

export const fetchGallery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '32920278-ac1f185981fb853c8559f3f77',
      q: query,
      page: page,
      orientation: 'horizontal',
      image_type: 'photo',
      per_page: '12',
    },
  });
  // .then(function (response) {
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })
  // .finally(function () {
  //   // выполняется всегда
  // });

  return response.data;
};

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '32920278-ac1f185981fb853c8559f3f77';
// axios.get(
//   `${BASE_URL}?q=${query}&page=${page}&key=18963132-a5d8582da162d4c0f5ee62384&image_type=photo&orientation=horizontal&per_page=12`
