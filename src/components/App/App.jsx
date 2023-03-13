import { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyle';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Layout } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <Layout>
        <ErrorBoundary fallback="Sorry something went wrong ">
          <GlobalStyles />
          <Searchbar />
          Gallery
        </ErrorBoundary>
      </Layout>
    );
  }
}
