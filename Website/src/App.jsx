import React from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import Classes from './components/Classes';
import Reviews from './components/Reviews';
import AmazonPicks from './components/AmazonPicks';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <Classes />
      <Reviews />
      <AmazonPicks />
      <ContactInfo />
    </div>
  );
}

export default App;
