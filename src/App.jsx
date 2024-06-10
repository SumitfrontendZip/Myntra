import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import CardInfo from './Components/CardInfo/CardInfo';
import AddToCard from './Components/AddToCard/AddToCard'; // Assuming you meant this to be a default export
import { Home } from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { counterContext } from './Components/context/context'; // Context names typically start with an uppercase letter
import { useState } from 'react';
import { NotPageFound } from './Components/NotPageFound/NotPageFound';
import { v4 as uuid } from 'uuid';


function App() {
  const initialAddToCardData = JSON.parse(localStorage.getItem('addToCardData')) || [];
  const [countBag, setCountBag] = useState(initialAddToCardData.length);
  const [deliveryCode, setDeliveryCode] = useState('');

  const handleAddToCardButton = (card, size = 36) => {
    const existingCard = initialAddToCardData.find(data =>
      data.card.brand === card.brand &&
      data.size === size &&
      data.card.name === card.name
    );

    if (!existingCard) {
      const updatedData = [...initialAddToCardData, { card, size }];
      console.log(updatedData);
      updatedData.forEach((item)=>{
        item.id = uuid()
      })
      localStorage.setItem('addToCardData', JSON.stringify(updatedData));
      setCountBag(updatedData.length);
    }
  };

  const handleNotificationBar = (id) => {
    if (id === 'removeAllElements') {
      setCountBag(0)
    }
    setCountBag(countBag - 1)
  }


  const handleInputValue = (value) => {
    setDeliveryCode(value);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path: '/:brand/:name',
      element: (
        <>
          <Navbar />
          <CardInfo handleAddToCardButton={handleAddToCardButton} handleInputValue={handleInputValue} />
        </>
      )
    },
    {
      path: '/placeOrder',
      element: (
        <>
          <Navbar />
          <AddToCard deliveryCode={deliveryCode} handleNotificationBar={handleNotificationBar} />
        </>
      )
    }, {
      path: '*',
      element: (<><Navbar /><NotPageFound /></>)
    }
  ]);

  return (
    <counterContext.Provider value={countBag}>
      <RouterProvider router={router} />
    </counterContext.Provider>
  );
}

export default App;
