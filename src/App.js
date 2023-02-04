import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import WishList from './components/WishList/WishList';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <WishList></WishList>
    <Footer></Footer>
    </>
  );
}

export default App;
