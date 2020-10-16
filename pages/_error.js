import React, { Component } from 'react';
import Layout from '../components/Layout';

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    return (
      <Layout>
        <div>
          <div className="container col-md-8 text-center">
            <h1 className="mt-5" style={{ fontSize: 120 }}>
              {this.props.statusCode
                ? this.props.statusCode
                : 'An error occured on client'}
            </h1>
            <h2 className="mt-4">Not Found</h2>
            <h4 className="title text-center mt-4">
              โอ๊ะ! ไม่พบหน้าที่คุณต้องการ
            </h4>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Error;
