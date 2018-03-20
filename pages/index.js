import React from 'react';
import fetchSamplePage from '../services/fetchContent';

class App extends React.Component {
  static async getInitialProps() {
    const page = await fetchSamplePage();
    const pageJson = await page.json();
    return { pageJson };
  }

  render() {
    const { pageJson } = this.props;
    const content = pageJson.content.rendered;

    return (
      <div>
        <p>Welcome to next.js!</p>
        <div dangerouslySetInnerHTML={{__html: content }} />
      </div>
    );
  }
}

export default App;