
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Landing/Login';
import SignUp from './components/Auth/SignUp';
import Log from './components/Auth/Log';
import Header from './components/Main/Navigation';
import Landing from './components/Landing/Landing';
import Jobs from './components/Main/Jobs';
import Events from './components/Main/Events';
import Editor from './components/Main/Editor';
import Quiz from './components/Main/Quiz';
import Book from './components/Main/Book';
import Event from './components/Event'
import Foot from './components/Features/Foot';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<>
              <Header/>
              <Home />
         </>} />
         <Route path="/signup" element={<SignUp/>}/> 
         <Route path="/login" element={<Log/>}/> 
         <Route path='/jobs' element={<Jobs/>}/>
         <Route path='/events' element={<Events/>}/>
         <Route path="/editor" element={<Editor/>}/>\
         <Route path="/quiz" element={<Quiz/>}/>
         <Route path="/book" element={<Book/>}/>
         <Route path="/event" element={<Event/>}/>
         <Route path="/foot" element={<Foot/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
