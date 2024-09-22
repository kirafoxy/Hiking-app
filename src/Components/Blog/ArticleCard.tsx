
import Footer from "../Common/Footer"
import Header from "../Common/Header/Header"
import Social from '../Social';

interface ArticleCardProps {
    id: string;
    preview: string;
    description: string;
    title: string;
    image: string;
    secondimg:string;
}

export default function ArticleCard({ id, preview, description, title, image, secondimg }: ArticleCardProps){
    return(
        <>
            <Header/>
            <hr className='mb-10 text-white'/>
            <div id={id} className="container text-white mx-auto"> 

                    <h1 className="font-abel  text-8xl ">{title}</h1>
                    <hr className='mb-10'/>
                    <div className=' mb-52 leading-loose items-center z-20'>
                   
                        <div className="gap-6 flex z-10 ">
                        <p className="font-actor flex items-center tracking-wide text-2xl">{preview}</p>
                        <img className=" mr-20" src={image} alt={title} />
                        </div>
                        <div className="gap-6 flex z-10 ">
                        <img className="mr-20 w-1/3" src={secondimg} alt={title} />
                        <p className="font-actor tracking-wide flex items-center  text-xl">{description}</p>
                       
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

