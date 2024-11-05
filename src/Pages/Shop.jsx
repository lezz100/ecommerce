import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/NewsLetter/Newsletter';
import Footer from '../Components/Footer/Footer';

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
      <Footer />
    </div>
  )
};

export default shop
