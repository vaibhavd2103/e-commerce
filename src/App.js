import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing"
import HomeScreen from './pages/HomeScreen';
function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element ={<Landing/>} />
        <Route path="/home" element ={<HomeScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
