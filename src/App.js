import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
//   const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;
  return (
    <>
    
    <NoteState>
    <Router>
    <Navbar /> 
   
      <Routes>
        <Route exact path="/"  element={<Home />}  >
          {/* <Home /> */}
        </Route>
        <Route exact path="/about" element={<About />} >
          {/* <About/> */}
        </Route> 
       
      </Routes>
      
    </Router>
    </NoteState>
   
  </>
);
}
export default App;
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';

// function App() {
//   return (
//     <>
//     <div>
     
//       <Router>
//       <Navbar />
//         <Routes>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//         </Routes>
//       </Router>
//       </div>
//     </>
//   );
// }

// export default App;
