
import { useParams } from "react-router-dom";
import Footer from "../Common/Footer"
import Header from "../Common/Header/Header"
import Social from '../Social';
import { articles } from "./ArticlesDetails";
import { useEffect } from "react";

interface ArticleCardProps {
    id: string;
    preview: string;
    description: string;
    title: string;
    image: string;
    secondimg:string;
    mountin:string;
}

export default function ArticleCard(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const { id } = useParams<{ id: string }>();  
    const article = articles.find((article) => article.id === id); 
  
    if (!article) {
        return <h1>Article not found</h1>;
    }

    return(
        <>
            <Header/>
            <hr className='mb-10 mt-10 opacity-50 text-white'/>
            <div id={id} className="container text-white mx-auto"> 

                    <h1 className="font-abel text-8xl ">{article.title}</h1>
                    <hr className='mb-10 opacity-50'/>
                    <div className=' mb-52 leading-loose tracking-wide items-center '>
                   
                        <div className="gap-6 flex h-1/2">
                            <div className="relative">
                            <p className="font-actor text-center mt-10 flex items-center text-2xl">{article.preview}</p>
                            <img className="w-full mx-auto absolute bottom-0" src={article.mountin} alt="" />
                            </div>

                            <img className=" mr-20" src={article.image} alt={article.title} />
                        </div>
                        <div className="gap-6 mt-16 flex h-1/2">
                            <img className="mr-20 w-1/2" src={article.secondimg} alt={article.title} />
                            <p className="font-actor flex items-center w-1/2 text-xl">{article.description}</p>
                        </div>
                        
                        
                    </div>
                
        
            </div>
            <Social/>
            <hr className='mb-10  opacity-50 text-white'/>
            <Footer/>
        </>

    )
}


ArticleCard

