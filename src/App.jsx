import React from 'react';
import Navebar from './components/Navebar';
import Hero from './components/Hero';
import FlexContent from './components/FlexContent';
import { heroapi, popularsales , highlight, toprateslaes,footerAPI, sneaker, story } from './asset/data';
import Sales from './components/Sales';
import Cart from './components/Cart';
import Stories from './components/Stories';
import Footer from './components/Footer';
import ItemDetails from './components/ItemDetails';
const App = () => {
  return (
    <>
      <Navebar />
      <ItemDetails/>
       <Cart/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} /> 
    </>
  );
}

export default App;
