import './App.css';
import Helmet from 'react-helmet';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import ScrollTop from './ScrollTop';
import './Font.css';



function App() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="final project eka nikabadze" />
        <meta name="keywords" content="e-learning" />
        <meta name="author" content="eka nikabadze" />
        <meta name="google" content="notranslate" />
        {/* <!-- fb meta tags --> */}
        <meta property="fb:app_id" content="1035524960524728" />
        <meta property="og:url" content="https://ekanikabadze.github.io/final-proj/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="distance learning" />
        <meta property="og:description" content="The Opportunities of distance learning" />
        <meta property="og:image" content="https://ekanikabadze.github.io/final-proj/images/logofortags3.png" />
      </Helmet>
      <ScrollTop />
      <Routes>

        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/team" element={<Team />}></Route>
        <Route exact path="/course" element={<Courses />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="*" element={<Navigate to="/" />}  />
      </Routes>
    </>
  );
}

export default App;
