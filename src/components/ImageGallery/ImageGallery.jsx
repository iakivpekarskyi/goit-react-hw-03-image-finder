import { Component } from 'react';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { fetchGallery } from 'components/services/pixabay-api';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    name: 'blabla',
    page: 1,
  };

  componentDidUpdate(prevprops, prevState) {
    if (prevprops.name !== this.props.name) {
      fetchGallery(this.props.name, this.state.page).then(response => {
        this.setState({ images: response.hits });
      });
    }
    console.log(this.state.images);
  }

  render() {
    const { images } = this.state;

    return <div>hello</div>;
  }
}
