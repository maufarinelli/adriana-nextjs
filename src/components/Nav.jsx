import React from 'react';
import Link from 'next/link';

class Nav extends React.Component {
  render() {
    const { menu } = this.props;

    return (
      <nav>
        <Link href="/"><a>Home</a></Link>
        { menu.items.map(menuItem => (<Link href={menuItem.object_slug}><a className="nav-link">{menuItem.title}</a></Link>) ) }
      </nav>
    );
  }
}

export default Nav;