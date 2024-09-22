import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './Components/Common/Footer'
import Content from './Components/Content/Content'
import MainPage from './Components/MainPage/MainPage'
import './index.css'
import ArticleCard from './Components/Blog/ArticleCard';

function App() {

  return (
    <div>
      <BrowserRouter>
       
          <Routes>
            <Route path="/" element={
              <>
                <MainPage />
                <Content />
                <Footer />
              </>
            } />
            <Route path="/article/:id" element={<ArticleCard />} />
          </Routes>
         
    </BrowserRouter>

    
    </div>
  )
}

export default App


