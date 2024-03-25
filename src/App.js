import './App.css';
import TopBar from './components/topbar/topbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Books_ah from './pages/books_ah/books_ah';
import Books_sm from './pages/books_sm/books_sm';
import Books_friends from './pages/books_friends/books_friends'
import Books_attitude from './pages/books_at/books_at';
import Books_subtleart from './pages/books_subtleart/books_subtleart'
import Books_can from './pages/books_can/books_can';
import Header from './components/header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/books" element={<Books_ah/>}/>
        <Route path="/books/atomichabits" element={<Books_ah/>}/>
        <Route path="/books/thepowerofyoursubconsciousmind" element={<Books_sm/>}/>
        <Route path="/books/howtowinfriendsandinfluencepeople" element={<Books_friends/>}/>
        <Route path="/books/attitudeiseverything" element={<Books_attitude/>}/>
        <Route path="/books/thesubtleartofnotgivingafuck" element={<Books_subtleart/>}/>
        <Route path="/books/ifyouthinkyoucan" element={<Books_can/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
