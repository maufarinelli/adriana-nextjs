import { Component } from 'react';
import fetchSamplePage from '../services/fetchContent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {}
    };
  }

  componentWillMount() {
    this.fetchPage();
  }

  fetchPage() {
    const page = fetchSamplePage();

    page.then(response => this.setState({page: response}));
  }

  render() {
    const content = this.state.page.content && this.state.page.content.rendered;

    return (
      <div>
        <p>Welcome to next.js!</p>
        <div dangerouslySetInnerHTML={{__html: content }} />
      </div>
    );
  }
}

export default App;