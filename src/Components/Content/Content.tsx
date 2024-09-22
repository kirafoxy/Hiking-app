
import ContentCard from './ContentCard';
import { articles } from '../Blog/ArticlesDetails';
import { Link } from 'react-router-dom';


export default function Content(){
    return(
        <div id='contents' className='-mt-48'>
            {articles.map((content, index)=>{
        return (
            <Link to={`/article/${content.id}`} key={content.id}>
            <ContentCard 
              id={content.id}
              key={index}
              reverse={index % 2 !== 0}
              number={content.number}
              subtitle={content.subtitle}
              preview={content.preview}
              title={content.title}
              image={content.image}
              link={content.link}

              
             />
             </Link>
          )
      }) }
        </div>
    )
}

Content()