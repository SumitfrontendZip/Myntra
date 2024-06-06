import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import CardInfo from './Components/CardInfo/CardInfo';
import { Home } from './Components/Home/Home';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/sum",
      element:<CardInfo/>
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