import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container col-md-5 text-center">
        <h3>Res &amp; Caf POS</h3>
        <p>
          This project was bootstrapped with Create React App and the purpose of
          this development is for learning React in particular, references from
          Olanlab.
        </p>
      </div>
    </Layout>
  );
};

export default About;
