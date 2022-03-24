import React from 'react';
import ComingSoon from '../../components/organisms/ComingSoon';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export default function index() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ComingSoon />
      </div>
      <Footer />
    </>
  );
}
