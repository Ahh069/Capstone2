import React from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import Classes from './components/Classes';
import Reviews from './components/Reviews';
import AmazonPicks from './components/AmazonPicks';
import ContactInfo from './components/ContactInfo';

// import SweetTreats from './components/SweetTreats';



function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <Classes />
      <Reviews />
      <AmazonPicks />
      {/* <ContactInfo /> */}
      {/* <SweetTreats/> */}
      
  
    </div>

    
  );

}


export default App;
