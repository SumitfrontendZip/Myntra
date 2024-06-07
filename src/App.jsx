import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import CardInfo from './Components/CardInfo/CardInfo';
import { Home } from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddToCard } from './Components/AddToCard/AddToCard';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/:brand/:name",
      element: <CardInfo />
    },
    {
      path:'/placeOrder',
      element:<AddToCard/>
    }
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>

    </>
  );
}

export default App;