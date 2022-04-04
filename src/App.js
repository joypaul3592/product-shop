
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashbord from './Components/Dashbord/Dashbord';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/review" element={<Review></Review>} />
          <Route path="/dashbord" element={<Dashbord></Dashbord>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/about" element={<About></About>} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
