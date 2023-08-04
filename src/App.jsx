import React from 'react';
import TopNavbar from './components/TopNavbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsFilter from './components/ProductsFilter';
import Footer from './components/Footer';
import Products from './components/Products';

const App = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Hero />
      <ProductsFilter />
      <Products />
      {/* <ProductPage /> */}
      <Footer />
      {/* <ProductMain /> */}
    </>
  );
};

export default App;