import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import CardInfo from './Components/CardInfo/CardInfo';
import { Home } from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddToCard } from './Components/AddToCard/AddToCard';
import { counterContext } from './Components/context/context'
import { useState } from 'react';

function App() {

  let addToCardData = JSON.parse(localStorage.getItem('addToCardData')) || [];
  const [countBag, setCountBag] = useState(addToCardData.length)


  const handleAddToCardButton = (card, size = 36) => {
    const existingCard = addToCardData.find(data => data.card.brand === card.brand && data.size === size && data.card.name === card.name)

    if (!existingCard) {

      addToCardData.push({
        card: card,
        size: size
      })
      localStorage.setItem('addToCardData', JSON.stringify(addToCardData));
      setCountBag(countBag + 1)
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Navbar/><Home/></>
    },
    {
      path: "/:brand/:name",
      element: <><Navbar/><CardInfo handleAddToCardButton={handleAddToCardButton} /></>
    },
    {
      path: '/placeOrder',
      element:<><Navbar/><AddToCard /></>
    }
  ])


  return (
    <>
      <counterContext.Provider value={countBag}>
        <RouterProvider router={router} />
      </counterContext.Provider>
    </>
  );
}

export default App;