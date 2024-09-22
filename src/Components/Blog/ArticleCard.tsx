
import { useParams } from 'react-router-dom';
import Footer from "../Common/Footer"
import Header from "../Common/Header/Header"
import { articles } from '../Blog/ArticlesDetails';
import Social from '../Social';



export default function ArticleCard(){
    
    const { id } = useParams<{ id: string }>(); 
    const article = articles.find((article) => article.id === id);
  
    if (!article) {
      return <h1>Article not found</h1>;
    }
    return(
        <>
            <Header/>
            <hr className='mb-10 text-white'/>
            <div id={article.id} className="container text-white mx-auto"> 

                    <h1 className="font-abel  text-8xl ">{article.title}</h1>
                    <hr className='mb-10'/>
                    <div className=' mb-52 leading-loose items-center z-20'>
                   
                        <div className="gap-6 flex z-10 ">
                        <p className="font-actor flex items-center tracking-wide text-2xl">{article.preview}</p>
                        <img className=" mr-20" src={article.image} alt={article.title} />
                        </div>
                        <div className="gap-6 flex z-10 ">
                        <img className="mr-20 w-1/3" src={article.secondimg} alt={article.title} />
                        <p className="font-actor tracking-wide flex items-center  text-xl">{article.description}</p>
                       
                        </div>
                        
                        
                    </div>
                
        
            </div>
            <Social/>
            <hr className='mb-10 text-white'/>
            <Footer/>
        </>

    )
}


ArticleCard

