import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Common/Footer'
import Content from './Components/Content/Content'
import MainPage from './Components/MainPage/MainPage'
import ArticleCard from './Components/Blog/ArticleCard';
import './index.css'
import AboutUs from './Components/Common/AboutUs';
import Equipment from './Components/Equipment/Equipment';



function App() {
  return (
    <div>
      <Router>
     
          <Routes>
            <Route path="/" element={
              <>
                <MainPage />
                <Content />
                <hr className='mb-10  opacity-50 text-white'/>
                <Footer />
              </>
            } />
            <Route path="/article/:id" element={<ArticleCard />} />
            <Route path="/article/:id" element={<ArticleCard />} />
            <Route path="/aboutus" element={<AboutUs />} /> 
            <Route path="/equipment" element={<Equipment />} /> 
           
          </Routes>
         
    </Router>

    
    </div>
  )
}

export default App;

