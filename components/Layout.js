import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Res &amp; Caf Blogger</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
