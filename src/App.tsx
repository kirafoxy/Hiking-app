import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Common/Footer'
import Content from './Components/Content/Content'
import MainPage from './Components/MainPage/MainPage'
import ArticleCard from './Components/Blog/ArticleCard';
import './index.css'


function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={
              <>
                <MainPage />
                <Content />
                <Footer />
              </>
            } />
            <Route path="/article/:id" element={<ArticleCard id={''} preview={''} description={''} title={''} image={''} secondimg={''} />} />
          </Routes>
         
    </Router>

    
    </div>
  )
}

export default App;

