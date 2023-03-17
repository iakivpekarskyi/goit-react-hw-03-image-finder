import { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyle';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Layout } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    inputValue: '',
  };

  handleSearch = searchInput => {
    const { inputValue } = this.state;
    if (inputValue !== searchInput) this.setState({ inputValue: searchInput });
  };

  render() {
    return (
      <Layout>
        <ErrorBoundary fallback="Sorry something went wrong ">
          <GlobalStyles />
          <Searchbar handleSearch={this.handleSearch} />
          <ImageGallery name={this.state.inputValue} />
        </ErrorBoundary>
      </Layout>
    );
  }
}
