import Body from './components/Body.js'
import NavBar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className=' block lg:flex'>
      <NavBar />
      <Body className="pl-5" />
    </div>
   
    );
}

export default App;
