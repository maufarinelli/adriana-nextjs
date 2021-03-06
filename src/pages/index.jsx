import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

class Home extends React.Component {
  static async getInitialProps() {
    const fetchedPage = await fetch('http://159.89.116.112/adriana/wp-json/wp/v2/pages/2');
    const page = await fetchedPage.json();

    // Todo: I18n menu
    const fetchedMenu = await fetch('http://159.89.116.112/adriana/wp-json/wp-api-menus/v2/menus/15');
    const menu = await fetchedMenu.json();

    return { page, menu };
  }

  render() {
    const { page, menu  } = this.props;
    const content = page.content.rendered;

    return (
      <Layout menu={menu}>
        <div>
          <h1>Hello World.</h1>
          <div dangerouslySetInnerHTML={{__html: content }} />
        </div>
      </Layout>
    );
  }
}

export default Home;