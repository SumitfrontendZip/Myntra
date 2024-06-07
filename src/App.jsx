import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import CardInfo from './Components/CardInfo/CardInfo';
import { Home } from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddToCard } from './Components/AddToCard/AddToCard';

function App() {

  let addToCardData = JSON.parse(localStorage.getItem('addToCardData')) || [];

  const handleAddToCardButton = (card , size) => {
    console.log(size);
    const existingCard = addToCardData.find(data => data.card.brand === card.brand && data.size === size && data.card.name === card.name)

    if (!existingCard) {
      addToCardData.push({
        card:card,
        size:size
      })
      localStorage.setItem('addToCardData', JSON.stringify(addToCardData));
    }
    console.log(addToCardData);

  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/:brand/:name",
      element: <CardInfo handleAddToCardButton={handleAddToCardButton} />
    },
    {
      path: '/placeOrder',
      element: <AddToCard />
    }
  ])


  return (
    <>
      <Navbar />
      <RouterProvider router={router} />

    </>
  );
}

export default App;